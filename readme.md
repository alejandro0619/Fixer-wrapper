<h1 align="center">
  <br>
  <a href="https://github.com/alejandro0619" alt="Fixer.io Wrapper" width="200"></a>
  <br>
  💸 Fixer.io-Wrapper 💸
  <br>
</h1>

<h3 align="center"> Useful Fixer.io unofficial wrapper for Javascript </h3>


## Features 🦾

  ✅ Latest rates endpoint

  ✅ Convert endpoint

  ✅ Historical rates endpoint

  ✅ Time-Series data endpoint

  ✅ Fluctuation data endpoint


## How to use 📖
    IMPORTANT TO READ:

    You have to select a plan and create an account to be able to use this web API, therefore you'll receive an access_key that you can use to request data to a given endpoint (and you can use this wrapper too).

    Thus, I highly recommend to you to read the official documentation, because some features of this wrapper are not available for free tier plans and if you want to implement them in your application you must buy another plan.
    The links are right below this paragraph:

  ### [Offical documentation](https://fixer.io/documentation)
  ### [Create an account](https://fixer.io/product)
  ----
      NOTE:
      See sample section to know how to start using this wrapper methods.
  ----

    Methods ->
     ❇️Lastest: 
     ➡️ Required: 
     ➡️ Optional: bases: string,
                 symbols: string.
    ❇️Convert:
     ➡️ Required: convertFrom: string,
                 convertTo: string,
                 amount: string,
                 base: string.
     ➡️ Optional: 

    ❇️TimeSeries:
     ➡️ Required: startDate: string,
                 endDate: string.

     ➡️ Optional: base: string,
                 symbols: string.

    ❇️Historical: 
      ➡️ Required: date: string.

      ➡️ Optional: base: string,
                  symbols: string.

    ❇️Fluctuation:
      ➡️ Required: startDate: string,
                  endDate: string.

      ➡️ Optional: base: string,
                  symbols: string

        
## Samples 📕
```javascript
// In your index.js:
import { FixerWrapper } from 'fixer-wrapper';

/*
You should not store your access_key in a simple constant but in a enviroment variable to make it more secure.
*/
const ACCESS_KEY = 'your_access_key';

// Initialize Fixer class.
const Fixer = new FixerWrapper(ACCESS_KEY);

const getLastest = await Fixer.lastest('USD', 'VEF, EUR');

/* 
We pass an object with multiple params as below.
Note that we are no passing date param because it's just an optional param. 
*/
const getconvert = await Fixer.convert({
    convertFrom: 'USD',
    convertTo: 'EUR',
    amount: '445'
});

const getTimeseries = await Fixer.timeSeries({
    startdate: '2015-02-12',
    endDate: '2015-05-13',
    baseParam: 'VEF',
    symbols: 'EUR, USD, AUD'
});

const getHistorical = await Fixer.historical('2020-02-24');

const getFluctuation = await Fixer.fluctuation({
    startDate: '2004-06-14',
    endDate: '2005-02-12'
});

```
----
    NOTE: You can see the way each method will return responses to you by seeing their documentation.
## Download 💾


To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/alejandro0619/Fixer-wrapper.git

# Go into the repository
$ cd Fixer-wrapper

# Install dependencies
$ npm install

# Build
$ npm run build

# Run the app
$ npm run start

```


## Credits 📚

This software uses the following open source packages:

- [Axios](https://axios-http.com/)
- [Node.js](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)


## License 🔐
### The source code of this project is under the [MIT license](https://github.com/alejandro0619/Fixer-wrapper/blob/main/LICENSE) 

---

> GitHub [@Tsukiapp](https://github.com/Tsukiapp) &nbsp;&nbsp;

> Github [@alejandro0619](https://github.com/alejandro0619) &nbsp;&nbsp;