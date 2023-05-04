// task 1
const { Builder, By, Key, until, Select } = require("selenium-webdriver");
require("chromedriver");
const assert = require("assert");

// (async function() {
//   const driver = await new Builder().forBrowser('chrome').build();

//   try {
//     await driver.get('http://the-internet.herokuapp.com/dropdown');
//     const dropdown = await driver.findElement(By.id('dropdown'));
//     await dropdown.click();
//     const options = await driver.findElements(By.tagName('option'));
//     const firstElementStatus = await options[0].isEnabled();
//     const secondElementStatus = await options[1].isEnabled();

//     console.log('firstElementEnabled? =' + `${firstElementStatus}` + ' secondElementEnabled? = ' + `${secondElementStatus}`);
//   } catch (error) {
//     console.log('Test failed:', error.message);
//   } finally {
//     await driver.quit();
// }
// })();

// // task 2
// (async function () {
//   const driver = await new Builder().forBrowser("chrome").build();

//   try {
//     await driver.get("http://the-internet.herokuapp.com/hovers");
//     const avatar = await driver.findElement(By.css(".figure"));
//     await driver.actions().move({ origin: avatar }).perform();
//     const userInfo = await avatar.findElement(By.css(".figcaption h5"));
//     assert.strictEqual(await userInfo.getText(), "name: user1");

//     console.log("Test passed!");
//   } catch (error) {
//     console.error("Test failed:", error.message);
//   } finally {
//     await driver.quit();
//   }
// })();

// // task 3
// (async function () {
//   const driver = await new Builder().forBrowser("chrome").build();

//   try {
//     await driver.get("http://formy-project.herokuapp.com/form");
//     await driver.findElement(By.id("first-name")).sendKeys("Peter");
//     await driver.findElement(By.id("last-name")).sendKeys("Peterson");
//     await driver.findElement(By.id("job-title")).sendKeys("tester");
//     await driver.findElement(By.id("radio-button-3")).click();
//     await driver.findElement(By.id("checkbox-1")).click();
//     const yearsOfExperienceDropdown = await driver.findElement(By.id("select-menu"));
//     await yearsOfExperienceDropdown.click();
//     const option = await yearsOfExperienceDropdown.findElement(By.css("option[value='2']"));
//     await option.click();
//     await driver.findElement(By.id("datepicker")).sendKeys("12/12/2020");
//     await driver.findElement(By.css(".btn.btn-lg.btn-primary")).click();
//     await driver.wait(until.elementLocated(By.css(".alert.alert-success")), 5000);
//     const successMessage = await driver.findElement(By.css(".alert.alert-success")).getText();
//     assert.strictEqual(successMessage, "The form was successfully submitted!");

//     console.log(successMessage);
//   } catch (error) {
//     console.error('Test failed:', error.message);
//   } finally {
//     // Close the browser
//     await driver.quit();
//   }
// })();

// task 4
(async function () {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://the-internet.herokuapp.com/tables");
    const secondTable = await driver.findElement(By.css("table:nth-of-type(2)"));
    await driver.executeScript("arguments[0].scrollIntoView()", secondTable);
    const dueColumnHeader = await driver.findElement(By.css("table:nth-of-type(2) thead th:nth-of-type(4)"));
    await dueColumnHeader.click();
    const dueColumnCells = await driver.findElements(By.css("table:nth-of-type(2) tbody td:nth-of-type(4)"));
    const dueColumnValues = [];
    for (let cell of dueColumnCells) {
      let value = await cell.getText();
      if (value !== "") {
        dueColumnValues.push(Date.parse(value));
      }
    }
    const sortedDueColumnValues = [...dueColumnValues].sort();
    assert.deepStrictEqual(dueColumnValues, sortedDueColumnValues);

    console.log("All tests passed!");
  } catch (error) {
    console.error("Test failed:", error.message);
  } finally {
    await driver.quit();
  }
})();
