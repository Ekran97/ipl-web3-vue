<template>
   <b-container>
      <b-row>
        <b-col xs="span: 8, offset: 2" style= "marginTop: 200px">
          <b-form @submit.prevent="authenticate">
            <b-form-group class="b-row" controlId="formHorizontalEmail"
              label="Email" label-size="sm">
              <b-col class="sm-10">
                <b-form-input
                  name="email"
                  type="email"
                  placeholder="Email"
                  :value="email"
                  @change.native="onFieldChange"
                />
              </b-col>
            </b-form-group>

            <b-form-group class="b-row" controlId="formHorizontalPassword" 
              label="Password" label-size="sm">
              <b-col class="sm-10">
                <b-form-input
                  name="password"
                  type="password"
                  placeholder="Password"
                  :value="password"
                  @change.native="onFieldChange"
                />
              </b-col>
            </b-form-group>

            <b-form-group as="b-row">
              <b-col sm="span: 10, offset: 2">
                <b-button type="submit">Sign in</b-button>
              </b-col>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>

export default {
    name: 'login-component',
    props: {
        email: String,
        password: String,
        authenticate: Function,
        onFieldChange: Function
    }
}
</script>
