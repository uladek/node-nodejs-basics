
const parseEnv = () => {

    const prefix = 'RSS_';

    const envVKeys = process.env;
    // const rssA = Object.keys(envVKeys);

    const rssVariables = Object.keys(envVKeys)
      .filter((key) => key.startsWith(prefix))
      .map((key) => `${key}=${envVKeys[key]}`);

    if (rssVariables.length > 0) {
      console.log(rssVariables.join('; '));
    } else {
      console.log('No RSS_ environment variables found');
    }
}

parseEnv();
