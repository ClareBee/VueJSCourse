<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>{{ name }}</p>
        <p>{{ age }}</p>
        <button @click="changeName">Change My Name!</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                :myName="name"
                :resetFn="resetName"
                :myAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                  :myAge="age"
                  @ageChanged="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
          return {
            name: 'Clare',
            age: 27
          }
        },
        methods: {
          changeName: function() {
            this.name = 'Bob';
          },
          resetName: function() {
            this.name = 'Clare';
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
