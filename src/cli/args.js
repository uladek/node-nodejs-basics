const parseArgs = () => {
  const args = process.argv;
  let output = '';

  for (let i = 2; i < args.length; i += 2) {
      const propName = args[i].slice(2);
      const value = args[i + 1];
      output += `${propName} is ${value}, `;
  }

    output = output.slice(0, -2);
    console.log(output);
};

parseArgs();
