
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
    const displayedBots = await driver.findElement(By.xpath('//choices[@class="container"')).isDisplayed
    expect(displayedBots).toBeTruthy()
})

test('Add to Duo adds to player duo div', async () => {
    const addbots = await driver.findElement(By.id('choices'))
    await addbots.findElement(By.xpath("//bot-card[@class='bot-btn'")).click()
    const playerBots = await driver.findElement(By.xpath('//player-duo[@class="container"')).isDisplayed
    expect(playerBots).toBeTruthy()
})

