# Arctic Store

Frontend – Projektarbete – (G-Nivå)

## Kravspecifikation
> **Viktig Notering angående Fake Store API:** 
> Under utvecklingen kraschade den officiella Fake Store-servern (Returnerade Error 523: Origin Unreachable). För att säkerställa att skolprojektet fortsatte att fungera felfritt och att kravet på API-hämtning uppfylldes, implementerade vi proaktivt en egen backup-API-databas via GitHub. Alla anrop går nu säkert via `https://raw.githubusercontent.com/...` istället.

1. En webbutik som visar alla produkter från Fake Store API (https://fakestoreapi.com/)
2. Valfri Responsiv CSS-Layout.
3. Ett beställningsformulär för att beställa en produkt (Namn, telefon, e-post, leveransadress).

## Funktionalitet
1. Beställa en produkt.
2. Validera fält i beställningsformuläret via JavaScript:
   - Namn: 2-50 tecken
   - E-post: Måste innehålla @, max 50 tecken
   - Telefon: Siffror, bindestreck, parenteser, max 20 tecken
   - Gatuadress: 2-50 tecken
   - Postnummer: Exakt 5 siffror
   - Ort: 2-20 tecken
3. Publicera på GitHub Pages.
