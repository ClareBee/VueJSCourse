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
                <hr >
                <button @click="getData" class="btn btn-primary">Get Data</button>
                <ul class="list-group">
                  <li class="list-group-item" v-for="u in users">{{ u.email }}</li>
                </ul>
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
          },
          users: [],
          resource: ''
        }
      },
      methods: {
        submit(){
          // this.$http.post('data.json', this.user)
          //   .then(response => {
          //     console.log(response)
          //   })
          //   .catch(err => {
          //     console.log(err)
          //   })
          // alternative syntax using resource configured in created()
          console.log(this.resource)
          this.resource.save({}, this.user);
        },
        getData(){
          this.$http.get('data.json')
            .then(response => {
              return response.json()
            })
            .then(data => {
              console.log('data', data)
              const resultArray = [];
              for(let key in data){
                resultArray.push(data[key]);
              }
              console.log(resultArray)
              this.users = resultArray;
            })
            .catch(err => {
              console.log(err)
            })
        }
      },
      created(){
        this.resource = this.$resource('data.json');
      }
    }
</script>

<style>
</style>
