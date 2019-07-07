export interface BemDecl {
    block: string;
    elem?: string;
    mods?: { [modName: string]: string | boolean };
}

export default class Bem {
    static cls(
        block: string,
        elem?: string,
        mods?: { [modName: string]: string | boolean | undefined }
    ): string;

    static cls(block: string, elem?: string): string;

    static cls(decl: BemDecl): string;

    static cls(
        decl: BemDecl | string,
        elem?: string,
        mods?: { [modName: string]: string | boolean }
    ): string {
        return typeof decl === 'string'
            ? Bem.getCls({ block: decl, elem, mods })
            : Bem.getCls(decl);
    }

    private static getCls(decl: BemDecl): string {
        const { block, elem, mods } = decl;
        const baseClass: string = elem ? `${block}__${elem}` : block;

        if (!mods) {
            return baseClass;
        }

        const modsClasses = Object.keys(mods).reduce((res, mod) => {
            if (mods[mod] === true) {
                return `${res} ${baseClass}_${mod}`;
            } else if (mods[mod] === '' || mods[mod] === false) {
                return res;
            } else {
                return `${res} ${baseClass}_${mod}_${mods[mod]}`;
            }
        }, '');

        return `${baseClass}${modsClasses}`;
    }
}
