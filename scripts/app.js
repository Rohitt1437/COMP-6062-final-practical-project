console.log('JS LOADED!')
const app = Vue.createApp({
    data() {
  return {
    userprofile: [],        // will hold the API object directly
    weatherData: [],        // will hold the API object directly
    dictionary: [],         // will hold the API object directly
    City: 'London',
    Province: 'Ontario',
    Country: 'Canada',
    Word: ''
  }
},
    created(){
        this.fetchUserprofile();
        this.fetchWeatherdata();
        this.fetchDictionarydata();

    },
    
    methods:{
        fetchUserprofile(){
            fetch('https://comp6062.liamstewart.ca/random-user-data')
                .then(response =>{
                    return response.json();
                }

                )
                .then(data =>{
                    this.userprofile = data.user_profile;
                }

                )
                .catch(error =>{
                    console.log('ERROR');
                }

                )
            
        },
        fetchWeatherdata(){
            fetch('https://comp6062.liamstewart.ca/weather-data?city=Toronto&province=Ontario&country=Canada')
                .then(response =>{
                    return response.json();
                }

                )
                .then(data =>{
                    this.weatherData = data.weather_data;
                }

                )
                .catch(error =>{
                    console.log('ERROR');
                }

                )
            
        },
        fetchDictionarydata(){
            fetch('https://comp6062.liamstewart.ca/api/define?word=Bottle')
                .then(response =>{
                    return response.json();
                }

                )
                .then(data =>{
                    this.dictionary = data;
                }

                )
                .catch(error =>{
                    console.log('ERROR');
                }

                )

        }


    }
}

);
app.mount('#app');