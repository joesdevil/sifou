import imgLastHaz from "../../images/last-haz.png";
import { useTranslation } from 'react-i18next';

function LastHaz() {
  const { t } = useTranslation();
  return (
    <small>
      <>
        <span  className="pr-color">
          Camera 02 / Area 3 / <small>23/11/2023 {t('at')} 6:00 PM</small>
        </span>
          <div className="rounded-4 bg-white p-3 py-4 shadow">
            <div className="d-flex align-items-center mt-3">
              <div className="ms-3">
                <img
                  className="object-fit-cover rounded-3"
                  src={imgLastHaz}
                  width="100px"
                  height="100px"
                  style={{}}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="ps-4">
                <h4 className="pb-2">
                  <span className="text-danger">{t('Urgent:')}</span> {t('a worker was injured')}
                </h4>
                <p>
                  {t('Please respond immediately and follow established procedures to address the situation.')}
                </p>
              </div>
            </div>
            <div className="d-flex mt-1 mb-2 justify-content-center algin-items-center">
              <button className="btn btn-sm btn-danger fw-bold px-5 py-2 me-3">
                {t('Resolved')}
              </button>
              <button className="btn btn-sm  btn-outline-secondary fw-bold px-4 py-2 ms-3">
                {t('Go To Camera')}
              </button>
            </div>
          </div>

      </>
    </small>
  );
}

export default LastHaz;
