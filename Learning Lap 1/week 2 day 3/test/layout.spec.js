const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
global.fetch = require('jest-fetch-mock')


describe("index.html", () => {
    document.documentElement.innerHTML = html.toString();
}
    describe("body", () => {
        test("it has a heading", () => {
            let heading = documnet.querySelector("h1");
            expect(heading).toBeTruthy();
        })
    })
})
