SELECT
  p.id AS "idPhone",
  p.nom,
  marque.nom AS marque,
  p."extensionSD",
  p."camRes",
  p.ram,
  p.stockage,
  p.audio,
  p.geolocalisation,
  os.nom AS os,
  p."osVersion",
  p.foldable,
  p.wifi,
  p.hotspot,
  p."tailleEcran",
  p.prix,
  p."supportSD",
  p.memoire,
  p."cpuCoeur",
  ghd.nom AS ghd
FROM
  (
    (
      (
        (
          "Phone" p
          JOIN "Marque" marque ON ((p."idMarque" = marque.id))
        )
        JOIN "SysOp" os ON ((p."osId" = os.id))
      )
      JOIN "TypeTelephone" ttel ON ((p."typeID" = ttel.id))
    )
    JOIN "GenerateurHautDebit" ghd ON ((p."ghdId" = ghd.id))
  );