import bedroom from '../../../assets/img/navigation_bedroom.png';
import livingRoom from '../../../assets/img/navigation_living-room.png';
import kitchen from '../../../assets/img/navigation_kitchen.png';
import hallway from '../../../assets/img/navigation_hallway.png';
import children from '../../../assets/img/navigation_children.png';
import office from '../../../assets/img/navigation_office.png';

const productNavigate = [
    {
        "title" : "Столы и стулья",
        "nameFurniture" : [
            "Столы и столики",
            "Стулья",
            "Обеденные группы",
        ]
    },
    {
        "title" : "Мягкая мебель",
        "nameFurniture" : [
            "Диваны",
            "Диван-кровать",
            "Модульные диваны",
            "Офисные диваны",
            "Кресла",
            "Банкетки",
            "Пуфы",
        ]
    },
    {
        "title" : "Шкафы",
        "nameFurniture" : [
            "Платяные шкафы",
            "Угловые шкафы",
            "Шкафы-купе",
            "Полки на стену",
            "Стелажи",
            "Этажерки",
            "Книжные шкафы",
        ]
    },
    {
        "title" : "Кухни",
        "nameFurniture" : [
            "Выставочные образцы кухонь",
            "Готовые кухни",
            "Модульные кухни",
            "Кухни на заказ",
        ]
    },
    {
        "title" : "Кровати и матрасы",
        "nameFurniture" : [
            "Кровати",
            "Матрасы",
            "Основания",
            "Покрывала и наматрасники",
            "Спальные гарнитуры",
        ]
    },
];

export const productNavigateCard = [
    {
        title: "Спальня",
        "imageUrl" : bedroom,
        "id" : 0,
    },
    {
        title: "Гостиная",
        "imageUrl" : livingRoom,
        "id" : 0,
    },
    {
        title: "Кухня",
        "imageUrl" : kitchen,
        "id" : 0,
    },
    {
        title: "Прихожая",
        "imageUrl" : hallway,
        "id" : 0,
    },
    {
        title: "Детская",
        "imageUrl" : children,
        "id" : 0,
    },
    {
        title: "Офис",
        "imageUrl" : office,
        "id" : 0,
    },
]

export default productNavigate;