## Project Explanation
This is a working demo using the i18next and react-i18next modules to display text in either German or English.

## Notable Features
This particular implementation of i18next initializes the translations in `i18n.ts`. A period ('.') is used as the key separator. 

Additionally, we have the file `Trans.tsx`, which exports the `AddTrans` function. This can be used to add translations from a file to the i18n instance.

## Implementation in Polar

First, add the `i18n.ts` and `Trans.tsx` files to the repository. The former file will likely need to be modified to support all of the languages that Polar wants to include, but it shouldn't be a major alteration.

Secondly, import `i18n`to the outermost source file. In this example, it is `index.tsx`. This will run the initialization and attach it to react-i18next.

Then, for each module that uses text that we want to translate, import useTranslation from react-i18next and AddTrans from `Trans.tsx`. In addition, import the JSON filethat contains the translations. The format of this file is detailed below. In the function or class that uses the text:

```
AddTrans(trans, "namespace")
const [t, i18n] = useTranslation();
```

In the code above, `trans` should be the JSON data and `"namespace"` should be a namespace that is related to the component or the type of component, to reduce key overlap.

In the place where the text should be, put `t("namespace:key")` where namespace is the namespace above and the key is the key for the desired translated text.

## JSON File Format

Each JSON file with translations should have keys that correspond to the language keys that we want to use. For this example, it is "en" for English and "de" for German. The value of each of these should be an object containing key-value pairs for the text of the component. Look in `ArticleTrans.json` for an example.

## Changing the Language

With this implementation, you can change the language from any component in the entire app. All you need to do is add the `const [t, i18n] = useTranslation()`, and use the function `i18n.changeLanguage(lng: string)` to change the language.

## Installation
Clone the repository to your local machine, then run the following command in the main directory:
`npm install`

## Running
Use the following command to run the example:
`npm start`