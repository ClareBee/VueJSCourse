<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="text" class="form-control" v-model="user.email">
                </div>
                <button @click="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          user: {
            username: '',
            email: ''
          }
        }
      },
      methods: {
        submit(){
          const url = "https://vue-example-3d671.firebaseio.com/data.json"
          console.log(this.user)
          this.$http.post(url, this.user)
            .then(response => {
              console.log(response)
            })
            .catch(err => {
              console.log(err)
            })
        }
      }
    }
</script>

<style>
</style>
