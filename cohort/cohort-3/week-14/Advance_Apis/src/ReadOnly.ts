// type config = {
//     apiKey:string;
//     endpoint:number
// }

// const config :Readonly<config> ={
//     apiKey:'kamlesh',
//     endpoint:21
// }

// config.apiKey = "ehnf"


interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.