export const fruitMixin = {
  data(){
    return {
      fruits: ['apple', 'pear', 'banana', 'orange'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits(){
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      })
    }
  }
}
