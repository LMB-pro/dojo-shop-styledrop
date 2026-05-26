# Mode Cadeau — Documentation

## Vue d'ensemble

Le mode cadeau permet à un client d'acheter un produit pour l'offrir à un proche, sans révéler le prix et avec une adresse de livraison différente de la sienne.

**Fichier modifié :** `src/pages/Checkout.tsx`
**Ajout :** ~165 lignes
**Commit :** `feat(checkout): add gift mode with hidden price and dedicated delivery address`

---

## Ce qui a été ajouté

### 1. Un état "mode cadeau"

Au chargement de la page checkout, le mode cadeau est désactivé par défaut. Un état React (`isGift`) suit si la case est cochée ou non.

```tsx
const [isGift, setIsGift] = useState(false);
```

### 2. Une nouvelle section "Cadeau" dans le formulaire

Placée entre **Shipping information** et **Payment**, elle contient :

- Une case à cocher **"C'est un cadeau 🎁"** avec un descriptif court
- Quand activée, un bloc révèle :
  - Un champ **message cadeau** (textarea, 300 caractères max)
  - Un sous-bloc **adresse de livraison du destinataire** :
    - Nom du destinataire
    - Adresse
    - Ville
    - Code postal
    - Pays (pré-rempli sur "France")

Tous les champs cadeau sont obligatoires uniquement si la case est cochée.

### 3. Un indicateur dans le résumé de commande

Quand le mode cadeau est actif, un bandeau rose apparaît dans le récapitulatif :

> 🎁 Mode cadeau activé — les prix seront masqués sur le bon de livraison.

Aujourd'hui c'est purement visuel — le bon de livraison réel n'est pas encore implémenté.

### 4. Sauvegarde des données dans la commande

Quand l'utilisateur valide, les infos cadeau sont ajoutées à la commande envoyée à l'API :

```js
gift: {
  isGift: true,
  giftMessage: "...",
  giftRecipientName: "...",
  giftAddress: "...",
  giftCity: "...",
  giftPostalCode: "...",
  giftCountry: "France",
}
```

Si le mode cadeau n'est pas activé : `gift: { isGift: false }`.

---

## Critères d'acceptation couverts

- [x] L'utilisateur peut activer/désactiver le mode cadeau via une case à cocher
- [x] Quand activé, un champ message s'affiche
- [x] Quand activé, des champs d'adresse de livraison différente s'affichent
- [x] La commande est sauvegardée avec ces informations
- [x] Un indicateur visible confirme que le mode est actif

---

## Limites connues / Reste à faire

- **Bon de livraison** : aujourd'hui le prix n'est masqué que **visuellement** dans l'UI. La vraie suppression du prix sur le bon de livraison physique nécessitera une modification côté logistique.
- **Email destinataire** : pas de champ email pour le destinataire — l'email de confirmation va à l'acheteur uniquement.
- **Personnalisation visuelle du message** : aujourd'hui un simple textarea — on pourrait imaginer plusieurs templates ("Joyeux anniversaire", "Bienvenue", etc.).
- **Frais d'emballage cadeau** : pas de surcoût ajouté pour le moment.

---

## Use case business

Cible : les consultants eXalt qui veulent offrir un goodie à un client, un nouveau collègue, ou un partenaire — sans passer par un mécanisme manuel.

Bénéfices attendus :
- Augmentation du panier moyen (achats relationnels B2B)
- Élargissement de la cible (achats non-personnels)
- Réduction du churn cognitif (plus besoin de re-saisir l'adresse perso à chaque fois)
