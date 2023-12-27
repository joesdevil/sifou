import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function Config() {
   const [rangDurationValue, setRageDurationValue] = useState(0);
   const [rangCamValue, setRageCamValue] = useState(0);

   const changeRangeValue = (e, num) => {
      switch (num) {
         case 1:
            setRageDurationValue(e.target.value);
            break;
         case 2:
            setRageCamValue(e.target.value);
            break;
         default:
            break;
      }
   };

   // Utilisez la fonction useTranslation pour obtenir les fonctions de traduction
   const { t, i18n } = useTranslation();

   const handleChangeLangue = (event) => {
      const nouvelleLangue = event.target.value;
      i18n.changeLanguage(nouvelleLangue);
    };

   return (
      <div className="p-4">
         <h4 className="pr-color">{t('All Settings')}</h4>
         <div className="row row-cols-lg-2">
            <div>
               <div className=" bg-white p-4 rounded-3">
                  <div className="gnrl">
                     <div className="d-flex justify-content-between">
                        <h5 className="pr-color">{t('General settings :')}</h5>
                        <button className="btn btn-sm fw-bold btn-outline-pr">
                           <small>{t('Change password')}</small>
                           <i class="bi bi-arrow-right-short"></i>
                        </button>
                     </div>
                     <div className="row my-4">
                        <div className="col-8 border pr-color p-3">
                           <b className="align-middle">{t('Language')}</b>
                        </div>
                        <div className="col-4 border p-3">
                           <select 
                           class="form-select form-select-sm"
                           value={i18n.language}
                           onChange={handleChangeLangue}
                           >
                              <option value="en">{t('English')}</option>
                              <option value="fr">{t('French')}</option>
                           </select>
                        </div>
                        <div className="col-8 border border-top-0 pr-color p-3">
                           <b className="align-middle">{t('Display mode')}</b>
                        </div>
                        <div className="col-4 border border-top-0 p-3">
                           <div class="form-check float-end form-switch">
                              <input class="form-check-input" type="checkbox" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="Alerts-&-Popups">
                     <div className="d-flex pt-4 justify-content-between">
                        <h5 className="pr-color">{t('Alerts & Popups :')}</h5>
                        <button className="btn btn-sm fw-bold btn-outline-pr">
                           <small>{t('Reset History')}</small>
                           <i class="bi bi-arrow-right-short"></i>
                        </button>
                     </div>
                     <div className="row my-4">
                        <div className="col-8 border pr-color pt-3">
                           <b className="align-middl">{t('Send alerts as emails')}</b>
                        </div>
                        <div className="col-4 border pt-3">
                           <div class="form-check float-end form-switch">
                              <input class="form-check-input" type="checkbox" />
                           </div>
                           <div class="form-check float-start form-switch">
                              <p className="pr-color small">{t('Enabled')}</p>
                           </div>
                        </div>
                        <div className="col-8 border pr-color pt-3">
                           <b className="align-middl">{t('Switch voice on/off')}</b>
                        </div>
                        <div className="col-4 border pt-3">
                           <div class="form-check float-end form-switch">
                              <input class="form-check-input" type="checkbox" />
                           </div>
                           <div class="form-check float-start form-switch">
                              <p className="pr-color small">{t('Disabled')}</p>
                           </div>
                        </div>
                        <div className="col-8 border pr-color pt-3">
                           <b className="align-middl">{t('Alerts sounds')}</b>
                        </div>
                        <div className="col-4 border pt-3">
                           <div class="form-check float-end form-switch">
                              <input class="form-check-input" type="checkbox" />
                           </div>
                           <div class="form-check float-start form-switch">
                              <p className="pr-color small">{t('Disabled')}</p>
                           </div>
                        </div>
                        <div className="col-8 border pr-color pt-3">
                           <b className="align-middl">
                              {t('Display alerts as popups')}
                           </b>
                        </div>
                        <div className="col-4 border pt-3">
                           <div class="form-check float-end form-switch">
                              <input class="form-check-input" type="checkbox" />
                           </div>
                           <div class="form-check float-start form-switch">
                              <p className="pr-color small">{t('Disabled')}</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="reports">
                     <div className="d-flex justify-content-between">
                        <h5 className="pr-color">{t('Reports :')}</h5>
                        <button className="btn btn-sm fw-bold btn-outline-pr">
                           <small>{t('Export As')}</small>
                           <i class="bi bi-arrow-right-short"></i>
                        </button>
                     </div>
                     <div className="row my-4">
                        <div className="col-6 border pr-color p-3">
                           <b className="align-middle">{t('Auto-save reports')}</b>
                        </div>
                        <div className="col-6 border p-3">
                           <select class="form-select form-select-sm">
                              <option selected>{t('Enabled (Weekly)')}</option>
                              <option value="FR">{t('Enabled (monthly)')}</option>
                           </select>
                        </div>
                        <div className="col-6 border border-top-0 pr-color p-3">
                           <b className="align-middle">{t('Display mode')}</b>
                        </div>
                        <div className="col-6 border border-top-0 p-3">
                           <div
                              className="pr-color "
                              style={{ overflow: "auto" }}
                           >
                              C:\Users\username\AppData\Roamin...
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="bg-white p-4 rounded-3">
                  <div className="Cam-Recording">
                     <div className="d-flex justify-content-between">
                        <h5 className="pr-color">{t('Camera Recording :')}</h5>
                        <button className="btn btn-sm fw-bold btn-outline-pr">
                           <small>{t('Reset Cache')}</small>
                           <i class="bi bi-arrow-right-short"></i>
                        </button>
                     </div>
                     <div className="row my-4">
                        <div className="col-6 border pr-color p-3">
                           <b className="align-middle">{t('Cache duration (sec)')}</b>
                        </div>
                        <div className="col-6 border p-3">
                           <span className="btn-outline-pr rounded-1 small px-2 py-1">
                              {rangDurationValue}
                           </span>
                           <input
                              type="range"
                              onChange={(e) => changeRangeValue(e, 1)} className="float-end mt-1 pr-bg w-75"
                              name="vol"
                              value={rangDurationValue}
                              min="0"
                              max="100"
                           />
                        </div>
                        <div className="col-6 border border-top-0 pr-color p-3">
                           <b className="align-middle">{t('Display mode')}</b>
                        </div>
                        <div className="col-6 border border-top-0 p-3">
                           <div
                              className="pr-color "
                              style={{ overflow: "auto" }}
                           >
                              C:\Users\username\AppData\Roamin...
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="Cam-Set">
                     <div className="d-flex justify-content-between">
                        <h5 className="pr-color">{t('Camera setup :')}</h5>
                        <button className="btn btn-sm fw-bold btn-outline-pr">
                           <small>{t('Add zone name')}</small>
                           <i class="bi bi-arrow-right-short"></i>
                        </button>
                     </div>
                     <div className="row my-4">
                        <div className="col-6 border pr-color p-3">
                           <b className="align-middle">{t('Cache duration (sec)')}</b>
                        </div>
                        <div className="col-6 border p-3">
                           <span className="btn-outline-pr rounded-1 small px-2 py-1">
                              {rangCamValue}
                           </span>
                           <input
                              type="range"
                              onChange={(e) => changeRangeValue(e, 2)}
                              className="float-end mt-1 pr-bg w-75"
                              name="vol"
                              value={rangCamValue}
                              min="0"
                              max="100"
                           />
                        </div>

                        <div className="col-4 border pr-color p-3">
                           <b className="align-middle">Camera #01</b>
                        </div>
                        <div className="col-4 border p-3">
                           <select class="form-select form-select-sm">
                              <option selected>{t('Enabled (Weekly)')}</option>
                              <option value="FR">{t('Enabled (monthly)')}</option>
                           </select>
                        </div>
                        <div className="col-4 border p-3">
                           <select class="form-select form-select-sm">
                              <option selected>{t('Enabled (Weekly)')}</option>
                              <option value="FR">{t('Enabled (monthly)')}</option>
                           </select>
                        </div>


                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
