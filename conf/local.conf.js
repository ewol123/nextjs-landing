nightwatch_config = {
    src_folders : [ "tests/local" ],
  
    selenium : {
      "start_process" : false,
      "host" : "hub-cloud.browserstack.com",
      "port" : 80
    },

    common_capabilities: {
      'build': 'nightwatch-browserstack',
      'browserstack.user': 'petigyulavri1',
      'browserstack.key': 'yCTvsE2M4cCQ8EUpikpY',
      'browserstack.debug': true,
      'browserstack.local': true,
    },
  
    test_settings: {
      default: {
      },
      chrome: {
        desiredCapabilities: {
          browser: "chrome"
        }
      },
      firefox: {
        desiredCapabilities: {
          browser: "firefox"
        }
      },
      safari: {
        desiredCapabilities: {
          browser: "safari"
        }
      },
      ie: {
        desiredCapabilities: {
          browser: "internet explorer"
        }
      }
    }
  };
  
  // Code to support common capabilites
  for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
    config['desiredCapabilities'] = config['desiredCapabilities'] || {};
    for(var j in nightwatch_config.common_capabilities){
      config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
    }
  }


  console.log(JSON.stringify(nightwatch_config));
  
  module.exports = nightwatch_config;