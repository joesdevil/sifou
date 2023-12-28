import { useState } from "react";
import { useTranslation } from 'react-i18next';
import UserImage from "../../images/R.jpg";


export default function User() {
    const { t } = useTranslation();

    const [isDisabled1, setIsDisabled1] = useState(false);
    const [isDisabled2, setIsDisabled2] = useState(false);
    const [isDisabled3, setIsDisabled3] = useState(false);

    const handleToggleClick = (svgNumber) => {
        switch (svgNumber) {
            case 1:
                setIsDisabled1(!isDisabled1);
                break;
            case 2:
                setIsDisabled2(!isDisabled2);
                break;
            case 3:
                setIsDisabled3(!isDisabled3);
                break;
            default:
                break;
        }
    };
    return (
        <>
            <tr className="">

                <td className="ni fw-semibold align-middle fs-7 pr-color">
                    <img src={UserImage} alt="Image Ronde" class="rounded-circle custom-width" />
                    James miller
                </td>

                <td className="ni fw-semibold align-middle fs-7 pr-color">
                    james.miller@example.com
                </td>
                <td className="ni fw-semibold align-middle fs-7 pr-color">
                    Admin
                </td>

                <td className="" >
                    <button className="btn fw-bold btn-outline-danger mt-3">
                        <i class="bi bi-x-circle-fill pe-sm-2"></i>{" "}
                        <span>{t('Delete')}</span>
                    </button>
                </td>
            </tr>
        </>
    )
}
