# Install

* Download Java JDK (https://www.oracle.com/java/technologies/javase-downloads.html)

* Download latest selenium server (http://selenium-release.storage.googleapis.com/index.html)

* Run the server
    ```bash
    java -jar selenium-server-standalone-2.45.0.jar
    ```

## Running with Firefox
* Find the latest release (https://github.com/mozilla/geckodriver/releases)
    ```bash
    export GECKO_DRIVER_VERSION='v0.29.0'

    wget https://github.com/mozilla/geckodriver/releases/download/$GECKO_DRIVER_VERSION/geckodriver-$GECKO_DRIVER_VERSION-linux64.tar.gz

    tar -xvzf geckodriver-$GECKO_DRIVER_VERSION-linux64.tar.gz

    rm geckodriver-$GECKO_DRIVER_VERSION-linux64.tar.gz

    chmod +x geckodriver

    cp geckodriver /usr/local/bin/
    ```

## Running with Chrome
    * Download last release chromedriver (http://chromedriver.storage.googleapis.com/index.html)

    * Unzip file
    ```bash
        unzip chromedriver_linux64.zip
    ```

    * Configure chromedriver on your system
    ```bash
        sudo mv chromedriver /usr/bin/chromedriver
        sudo chown root:root /usr/bin/chromedriver
        sudo chmod +x /usr/bin/chromedriver

    ```

* Run the e2e package.
```javascript
    const e2e = require('e2e-human-framework');


    e2e({
        projectPath: __dirname, // Where features are located
    });
```