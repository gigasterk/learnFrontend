import {classNames} from "shared/lib/classNames/classNames";
import cls from './SideBar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SideBarProps {
    className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const [t] = useTranslation();

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(cls.sideBar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>{t("Свернуть")}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher></ThemeSwitcher>
                <LangSwitcher className={cls.lang}></LangSwitcher>
            </div>
        </div>
    )
}

export default SideBar;