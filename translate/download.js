const fs = require("fs");
const mkdirp = require("mkdirp");
const {
  loadSpreadsheet,
  localesPath,
  nameList,
  lngs,
  sheetIds,
  columnKeyToHeader,
  NOT_AVAILABLE_CELL,
} = require("./index");

async function fetchTranslationsFromSheetToJson(doc) {
  return nameList.map(async (_, index) => {
    const sheet = doc.sheetsById[sheetIds[index]];

    if (!sheet) {
      return {};
    }

    const lngsMap = {};

    const rows = await sheet.getRows();

    rows.forEach((row) => {
      const key = row[columnKeyToHeader.key];
      lngs.forEach((lng) => {
        const translation = row[columnKeyToHeader[lng]];
        // NOT_AVAILABLE_CELL("_N/A") means no related language
        if (translation === NOT_AVAILABLE_CELL) {
          return;
        }

        if (!lngsMap[lng]) {
          lngsMap[lng] = {};
        }

        lngsMap[lng][key] = translation || ""; // prevent to remove undefined value like ({"key": undefined})
      });
    });

    console.log("@@ lngsMap", lngsMap);
    return lngsMap;
  });
}

async function checkAndMakeLocaleDir(dirPath, subDirs) {
  try {
    subDirs.forEach((subDir, index) => {
      mkdirp(`${dirPath}/${subDir}`, (err) => {
        if (err) {
          throw err;
        }

        if (index === subDirs.length - 1) {
          resolve();
        }
      });
    });
  } catch (err) {
    console.error(err);
  }
}

async function updateJsonFromSheet() {
  await checkAndMakeLocaleDir(localesPath, lngs);

  const doc = await loadSpreadsheet();

  const lngsMapList = await fetchTranslationsFromSheetToJson(doc);

  lngsMapList.forEach(async (lngsMap, index) => {
    fs.readdir(localesPath, (error, lngs) => {
      if (error) {
        throw error;
      }

      lngs.forEach(async (lng) => {
        const localeJsonFilePath = `${localesPath}/${lng}/${nameList[index]}.json`;

        const lngsObject = await lngsMap;

        const jsonString = JSON.stringify(lngsObject[lng], null, 2);

        fs.writeFile(localeJsonFilePath, jsonString, "utf8", (err) => {
          if (err) {
            console.log("@@rrororororor", err);
            throw err;
          }
        });
      });
    });
  });
}

updateJsonFromSheet();
