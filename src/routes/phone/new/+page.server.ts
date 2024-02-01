import prisma from "$lib/prisma";
import type { Actions, PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async function () {
    return {
        os: await prisma.sysOp.findMany(),
        ghd: await prisma.generateurHautDebit.findMany(),
        marque: await prisma.marque.findMany(),
        types: await prisma.typeTelephone.findMany()
    }
}

export const actions = {
    async default(event) {
        const formData = Object.fromEntries((await event.request.formData()).entries())
        const _nom = () => {
            const nom = formData.nom;
            if (typeof nom == "string") {
                return nom
            } else {
                error(400, "invalid data `nom`")
            }
        };
        const _extensionSD = () => {
            const extensionSD = formData.extensionSD;
            if (typeof extensionSD == "string") {
                return extensionSD === "true"
            }
        };
        const _camRes = () => {
            const camRes = formData.camRes;
            if (typeof camRes == "string") {
                return Number.parseFloat(camRes);
            } else {
                error(400, "invalid data `camRes`")
            }
        }
        const _ram = () => {
            const ram = formData.ram;
            if (typeof ram == "string") {
                return Number.parseFloat(ram);
            } else {
                error(400, "invalid data `ram`")
            }
        }
        const _stockage = () => {
            const stockage = formData.stockage;
            if (typeof stockage == "string") {
                return Number.parseFloat(stockage);
            } else {
                error(400, "invalid data `stockage`")
            }
        }
        const _audio = () => {
            const audio = formData.audio;
            if (typeof audio == "string") {
                return audio === "true"
            }
        };
        const _geolocalisation = () => {
            const geolocalisation = formData.geolocalisation;
            if (typeof geolocalisation == "string") {
                return geolocalisation === "true"
            }
        };
        const _osVersion = () => {
            const osVersion = formData.osVersion;
            if (typeof osVersion == "string") {
                return Number.parseInt(osVersion);
            } else {
                error(400, "invalid data `osVersion`")
            }
        };
        const _foldable = () => {
            const foldable = formData.foldable;
            if (typeof foldable == "string") {
                return foldable === "true"
            }
        };
        const _wifi = () => {
            const wifi = formData.wifi;
            if (typeof wifi == "string") {
                return wifi === "true"
            }
        };
        const _hotspot = () => {
            const hotspot = formData.hotspot;
            if (typeof hotspot == "string") {
                return hotspot === "true"
            }
        };
        const _tailleEcran = () => {
            const tailleEcran = formData.tailleEcran;
            if (typeof tailleEcran == "string") {
                return Number.parseInt(tailleEcran);
            } else {
                error(400, "invalid data `tailleEcran`")
            }
        };
        const _prix = () => {
            const prix = formData.prix;
            if (typeof prix == "string") {
                return Number.parseFloat(prix);
            } else {
                error(400, "invalid data `prix`")
            }
        };
        const _supportSD = () => {
            const supportSD = formData.supportSD;
            if (typeof supportSD == "string") {
                return supportSD === "true"
            }
        };
        const _memoire = () => {
            const memoire = formData.memoire;
            if (typeof memoire == "string") {
                return Number.parseFloat(memoire);
            } else {
                error(400, "invalid data `memoire`")
            }
        };
        const _cpuCoeur = () => {
            const cpuCoeur = formData.cpuCoeur;
            if (typeof cpuCoeur == "string") {
                return Number.parseFloat(cpuCoeur);
            } else {
                error(400, "invalid data `cpuCoeur`")
            }
        };
        const _ghd = () => {
            const ghd = formData.ghd;
            if (typeof ghd == "string") {
                return ghd
            } else {
                error(400, "invalid data `ghd`")
            }
        };
        const _marque = () => {
            const marque = formData.marque;
            if (typeof marque == "string") {
                return marque
            } else {
                error(400, "invalid data `marque`")
            }
        };
        const _os = () => {
            const os = formData.os;
            if (typeof os == "string") {
                return os
            } else {
                error(400, "invalid data `os`")
            }
        }
        const _typeTelephone = () => {
            const typeTelephone = formData.typeTelephone;
            if (typeof typeTelephone == "string") {
                return typeTelephone
            } else {
                error(400, "invalid data `typeTelephone`")
            }
        }
        prisma.phone.create({
            data: {
                nom: _nom(),
                extensionSD: _extensionSD(),
                camRes: _camRes(),
                ram: _ram(),
                stockage: _stockage(),
                audio: _audio(),
                geolocalisation: _geolocalisation(),
                osVersion: _osVersion(),
                foldable: _foldable(),
                wifi: _wifi(),
                hotspot: _hotspot(),
                tailleEcran: _tailleEcran(),
                prix: _prix(),
                supportSD: _supportSD(),
                memoire: _memoire(),
                cpuCoeur: _cpuCoeur(),
                ghd: {
                    connect: {
                        id: _ghd()
                    }
                },
                marque: {
                    connect: {
                        id: _marque()
                    }
                },
                os: {
                    connect: {
                        id: _os()
                    }
                },
                typeTelephone: {
                    connect: {
                        id: _typeTelephone()
                    }
                }
            }
        })
    }
} satisfies Actions;