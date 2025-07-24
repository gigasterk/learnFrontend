import {classNames} from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavBarProps {
    className?: string;
}

const NavBar = ({className}: NavBarProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>{t("Главная")}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>{t("О сайте")}</AppLink>
            </div>
        </div>
    )
}

export default NavBar;