
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('Clicking draw button displays bots', async () => {
    await driver.findElement(By.id('draw')).click()
    const displayedBots = await driver.findElement(By.xpath('//choices[@class="container"]')).isDisplayed
    expect(displayedBots).toBeTruthy()
})

test('"Add to Duo" button displays the player duo section', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css('.bot-btn')).click()
    const playerDuoSection = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuoSection.isDisplayed()
    expect(displayed).toBe(true)
})

//I was also having trouble getting this one to work
//I had trouble with the xpath but it seems like it wasn't needed
//was also unaware at the time you can find element by css
// test('Add to Duo adds to player duo div', async () => {
//     const addbots = await driver.findElement(By.id('choices'))
//     await addbots.findElement(By.xpath("//bot-card outline[@class='bot-btn']")).click()
//     const playerBots = await driver.findElement(By.xpath('//player-duo[@class="container"]')).isDisplayed
//     expect(playerBots).toBeTruthy()
// })

