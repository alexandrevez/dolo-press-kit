import puppeteer from 'puppeteer';

(async () => {
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		const now = new Date("2022-09-01");
		const formattedDate = now.toISOString().split('T')[0].replaceAll("-", "");
		const filename = "Doloréanne-DossierPresse-" + formattedDate + ".pdf";

		await page.goto('http://localhost:3000', {waitUntil: 'networkidle2'});
		await page.pdf({path: filename, format: 'letter', printBackground: true, margin: {top: 0, left: 0, right: 0, bottom: 0}});
  		await browser.close();
		
	} catch (error) {
		console.error(error);
	}
})();
