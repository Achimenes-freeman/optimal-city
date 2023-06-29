const data = [];

for (let i = 1; i <= 25; i++) {
    data.push({
        name: `foo${i}`,
        value: `bar${i}`
    })
}

Vue.createApp({
    data: () => ({
        data: data,
        currentName: data[0].name,
        currentValue: data[0].value,
        isSelectOpen: false
    }),
    methods: {
        selectChangeHandler(event) {
            this.currentName = event.target.textContent

            this.currentValue = this.data.reduce((sum, curr) => curr.name === this.currentName ? curr.value : sum, this.currentValue)
        },
        toggleSelectModal(){
            this.isSelectOpen = !this.isSelectOpen
        },
        changeValue(event){
            this.currentValue = event.target.value
        },
        changeData(){
            this.data = this.data.map(item => item.name === this.currentName ? {...item, value: this.currentValue} : item)
        }
    }
}).mount('#app')