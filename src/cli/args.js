const parseArgs = () => {
  const args = process.argv;
  let output = '';
  const prefix = '--';


  for (let i = 2; i < args.length; i += 2) {

      const propName = args[i]
      // console.log(propName)
      const value = args[i + 1];
      output += `${propName} is ${value}, `;
  }
    console.log(output);

};

parseArgs();
