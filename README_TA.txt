ROMEO PANELS — Starter Website (Tamil)

1. index.html, style.css, app.js ஆகிய 3 கோப்புகளையும் ஒரே folder-ல் வைத்திருக்கவும்.
2. index.html-ஐ browser-ல் திறந்தால் preview இயங்கும்.
3. இது front-end demo மட்டுமே. Login, wallet top-up, orders ஆகியவை browser-ல் simulation.
4. உண்மையான user accounts, admin permissions, database, payment gateway, UPI QR verification ஆகியவற்றுக்கு secure backend தேவை.
5. Payment success-ஐ browser screenshot/UPI redirect மட்டும் வைத்து நம்ப வேண்டாம். Payment provider webhook-ஐ server-side verify செய்து, ஒரே transaction-ஐ duplicate credit செய்யாமல் ledger வைத்திருக்க வேண்டும்.
6. Publish செய்வதற்கு முன் விற்கும் பொருட்கள் சட்டபூர்வமானவை என்றும் third-party game rules / intellectual property-ஐ மீறாதவை என்றும் உறுதி செய்யவும்.
7. Payment gateway account, business/KYC மற்றும் financial setup-ஐ பெற்றோர்/பாதுகாவலர் அல்லது தகுதியான பெரியவரின் உதவியுடன் செய்யவும். Secret keys-ஐ HTML/JavaScript-ல் ஒருபோதும் வைக்க வேண்டாம்.
