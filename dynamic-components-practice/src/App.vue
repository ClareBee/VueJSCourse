<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectComponent('appBlue')" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectComponent('appGreen')" class="btn btn-success">Load Green Template</button>
                <button @click="selectComponent('appRed')" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="currentComponent">
                  {{ text }}
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){
          return {
            currentComponent: 'appBlue',
            text: 'Blue Component'
          }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
          selectComponent: function(selectedComponent){
            this.text = `${event.target.innerHTML}`;
            this.currentComponent = selectedComponent;
          }
        }
    }
</script>

<style>
</style>
