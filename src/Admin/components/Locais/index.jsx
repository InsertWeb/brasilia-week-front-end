import { ModalAddLocal } from "./ModalAddLocal";
import { IconLocalization, IconSite } from "../../../assets/Icons";

export function AdminLocais() {
  return (
    <form className="bg-white rounded-lg p-5 space-y-5">
      <div>
        <div className="flex justify-between">
          <h3 className="text-lg font-medium uppercase">Locais</h3>
          <ModalAddLocal />
        </div>
        <div className="mt-4 space-y-5">
          <div className="grid grid-cols-2">
            <div className="space-y-1">
              <h3 className="text-xl pb-2">Local 01 Descrição aqui exemplo</h3>
              <div className="text-[#83BF45] flex gap-2 items-center">
                <IconLocalization />
                <span className="text-black">
                  Endereço fisico do local aqui
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <IconSite />
                <span>www.site.com.br</span>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl pb-2">Local 01 Descrição aqui exemplo</h3>
              <div className="text-[#83BF45] flex gap-2 items-center">
                <IconLocalization />
                <span className="text-black">
                  Endereço fisico do local aqui
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <IconSite />
                <span>www.site.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
