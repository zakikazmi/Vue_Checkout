<template>
  <form ref="form" class="card-form" @submit.prevent="submit" >
    <header>
      <h1 class="card-form-title">Payment Information</h1>
    </header>
    <b-row>
      <b-col md="9">
        <div for class="card-form-field-label">Payment Method</div>
        <div class="card-form-field" :class="{ 'form-group--error': $v.metho.$error }">
          <select
            name="cardField"
            class="card-form-field-select"
            required
            ref="cardField"
            v-model.trim="$v.metho.$model"
          >
            <option v-for="metho in methos" v-bind:key="metho">{{metho}}</option>
          </select>
        </div>
        <div class="error" v-if="!$v.metho.required">Field is required</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <div>
          <div for="cardOwnerInput" class="card-form-field-label">Cardholders Name</div>
        </div>
        <div class="card-form-field" :class="{ 'form-group--error': $v.name.$error }">
          <input
            name="nameField"
            type="text"
            pattern="[a-zA-Z]*"
            class="card-form-field-input"
            ref="nameField"
            v-model.trim="$v.name.$model"
          />
        </div>
         <div class="error" v-if="!$v.name.required">Field is required</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <div>
          <div for="cardNumberInput" class="card-form-field-label">Card Number</div>
        </div>
        <div class="card-form-field" :class="{ 'form-group--error': $v.number.$error }">
          <input
            name="numberField"
            type="text"
            ref="numberField"
            maxlength="20"
            class="card-form-field-input"
            v-mask="'####-####-####-####'"
            v-model.trim="$v.number.$model"
          />
        </div>
          <div class="error" v-if="!$v.number.required">Field is required</div>
          <div class="error" v-if="!$v.number.minLength">Credit Card must be 16 digits.</div>
      </b-col>
    </b-row>
        <div class="card-form-field">
      <b-row>
        <b-col cols="8">
          <div class="card-form-field-label">Expiration Date</div>
        </b-col>
        <b-col cols="4">
          <div class="card-form-field-label">Security Code</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4" :class="{ 'form-group--error': $v.month.$error }">
          <select
            name="exp_month"
            class="card-form-field-select"
            required
            ref="exp_month"
            v-model="$v.month.$model"
          >
            <option v-for="month in months" v-bind:key="month">{{month}}</option>
          </select>
          <div class="error" v-if="!$v.month.required">Field is required</div>
        </b-col>
        <b-col cols="4" :class="{ 'form-group--error': $v.year.$error }" >
          <select
            name="exp_year"
            class="card-form-field__select"
            required
            ref="exp_year"
            v-model.trim="$v.year.$model"
          >
            <option v-for="year in years" v-bind:key="year">{{year}}</option>
          </select>
          <div class="error" v-if="!$v.year.required">Field is required</div>
        </b-col>
        <b-col cols="4" :class="{ 'form-group--error': $v.cvc.$error }">
          <input
            name="cvcField"
            type="text"
            ref="cvcField"
            maxlength="3"
            class="card-form-field-input cvc-input"
            v-mask="'###'"
            v-model.trim="$v.cvc.$model"
          />
          <div class="error" v-if="!$v.cvc.required">Field is required</div>
          <div class="error" v-if="!$v.cvc.minLength">Security Code must be 3 digits.</div>
        </b-col>
      </b-row>
        </div>
    <button formnovalidate type="submit" class="btn-success card-form-submit" @click="submitValues()" :disabled="submitStatus === 'PENDING'">Purchase</button>
    <p class="typo__p-success" v-if="submitStatus === 'OK'">Item Preordered!</p>
    <p class="typo__p-error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
    <p class="typo__p-pend" v-if="submitStatus === 'PENDING'">Sending...</p>
  </form>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
  
  data() {
    return {
      lastValue: '',
      errors: [],
      metho: '',
      month: '',
      year: '', 
      number: '',
      name: '',
      cvc: '',
      submitStatus: null        
    };
  },
   validations: {
    metho: {
      required
    },
    name: {
      required
    },
    number: {
      required,
      minLength: minLength(16)
    },
    cvc: {
      required,
      minLength: minLength(3)
    },
    month: {
      required,
    },
    year: {
      required
    }
  },

  methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    },

    submitValues() {
      console.log(this.$refs.form.cardField.value);
      console.log(this.$refs.form.numberField.value);
      console.log(this.$refs.form.nameField.value);
      console.log(this.$refs.form.exp_month.value);
      console.log(this.$refs.form.exp_year.value);
      console.log(this.$refs.form.cvcField.value);
    },
  },

  computed: {
      methos: function () {
        return ["Visa","MasterCard"];
    },
      months: function () {
        return ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    },
    years: function() {
      const years = [];
      const currentYear = new Date().getFullYear();
      for (var i = 0; i < 10; i++) years.push(currentYear + i);
      return years;
    }
  }
};
</script>
