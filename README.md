# Een verhalenwebsite voor op reis

De opdracht is het maken van een verhalenwebsite die aansluit bij de doelen van de gebruikers en het bedrijf
WOW air. De website moet toegankelijk worden voor meerdere devices waarbij de gebruiker op gebruiksvriendelijke
manier naar verhalen kan zoeken door bijvoorbeeld te filteren/sorteren.
Alle verhalen zijn uniek vormgegeven op hun eigen manier wateen ervaring biedt voor de gebruiker. 

User Goals
1. De gebruiker wil een leuk verhaal kunnen vinden.
2. De gebruiker wil aanbevolen en/of verrassende resultaten aangeboden krijgen.
3. De gebruiker wil tijdens de reis verhalen kunnen lezen.
4. De gebruiker wil zijn input geven zodat andere gebruikers betere en leuke verhalen kunnen lezen.
5. Ondersteuning van verschillende gebruikers en gebruikers contexten

Business goals
1. De merkbeleving van NS versterken in de periode voor en tijdens de reis.
2. NS wil niet langer als een vervoerder bekend staan maar als een distributeur van ervaringen.

De website maakt gebruik van 3 breakpoints oftewel media queries, die ervoor zorgen dat de content er
op meerdere devices goed uitziet. Onderstaand zal ik toelichting geven over belangrijke of complexe codes per pagina.


- DE OVERZICHTSPAGINA / BIBLIOTHEEK / INDEX.HTML -

HEADER
• In header staat een nav elementen waar zich een UL (lijst) in bevind met de navigatie balk, gepositioneerd met display flex om de meeste items in de lijst naast elkaar te zetten.

MAIN
• In de main staan de belangrijkste contentelementen namelijk de verhalen die in articles zitten en het filter formulier.

DIV.UITGELICHT
• Er wordt een div met een classnaam om de uitgelichte verhalen geplaatst om deze in css met flex te positioneren (in een rij of kolom)

ARTICLE
• Elk uitgelicht artikel/verhaal bevat een klikbare header (h3), een UL(lijst) met plaatjes van iconen en een button waarmee de gebruiker een verhaal kan opslaan. Met javascript wordt de knop gedeclareerd in een variabel en vervolgens in een functie gestopt waar een class wordt verwijderd en toegevoegd. Met een click event listener zorgt dat ervoor dat de knop van state veranderd nadat de gebruiker erop heeft geklikt.

SECTION MET VERHALEN
• Er wordt een section gebruikt waar een h2 met "alle verhalen" zit, een filter button die met javascript wordt gebruikt om het formulier hiermee open en dicht te laten klappen. Daarnaast zit het formulier in deze section met 3 fieldsets, dit zijn 3 verschillende groeperingen met inputs in het formulier. Hier staan divjes omheen voor de styling in css voor o.a flex. Flex-wrap wordt hierbij gebruik zodat de fieldsets een regelverspringen als er geen ruimte meer over is.
• Vervolgens komen we bij "alle verhalen" terecht. Om deze articles staat een div omheen om te stylen met css zoals flex.

FOOTER
• In de footer staat een link waarbij de gebruiker weer bovenaan de pagina terecht komt.

CSS
•In css worden media queries gebruikt om de content per device te laten verspringen zodat het er goed uit blijft zien.
- @media only screen and (min-width: 700px). Dit is het breakpoint voor tablet gebruik. Alles onder een viewport breedte van 700px is geschikt voor mobile.
- @media only screen and (min-width: 1024px). Dit is het break voor desktop gebruik

