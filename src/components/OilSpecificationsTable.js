import React from "react";

const OilSpecificationsTable = () => {
    return (
        <>
            <div className="bg-primary text-primary-content py-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Характеристики и результаты испытаний растительного масла
                    </h1>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="overflow-x-auto p-4 bg-base-100">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Наименование показателей</th>
                                <th>Нормативная документация</th>
                                <th>Результаты испытаний</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="3" className="font-bold">
                                    1. Органолептические показатели
                                </td>
                            </tr>
                            <tr>
                                <td>- запах и вкус</td>
                                <td>ГОСТ 5472</td>
                                <td>Свойственный маслу подсолнечному</td>
                            </tr>
                            <tr>
                                <td>- прозрачность</td>
                                <td>ГОСТ 5472</td>
                                <td>Прозрачное без осадка</td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="font-bold">
                                    II. Физико-химические показатели
                                </td>
                            </tr>
                            <tr>
                                <td>1. Массовая доля влаги и летучих веществ, %, не более</td>
                                <td>ГОСТ 11812</td>
                                <td>0,05</td>
                            </tr>
                            <tr>
                                <td>2. Кислотное число, мг КОН/г, не более</td>
                                <td>ГОСТ 31933</td>
                                <td>0,18</td>
                            </tr>
                            <tr>
                                <td>3. Пероксидное число, ½ ммоль О/кг</td>
                                <td>ГОСТ 26593</td>
                                <td>1,5</td>
                            </tr>
                            <tr>
                                <td>4. Массовая доля нерастворимых примесей, %</td>
                                <td>ГОСТ 5481</td>
                                <td>Отсутствует</td>
                            </tr>
                            <tr>
                                <td>5. Массовая доля неомыляемых веществ</td>
                                <td>ГОСТ 5479</td>
                                <td>0,55</td>
                            </tr>
                            <tr>
                                <td>6. Массовая доля фосфорсодержащих веществ, %, не более</td>
                                <td>ГОСТ 31753</td>
                                <td>Отсутствует</td>
                            </tr>
                            <tr>
                                <td>7. Цветное число, мг йода, не более</td>
                                <td>ГОСТ 5477</td>
                                <td>4,84</td>
                            </tr>
                            <tr>
                                <td>8. Холодный тест</td>
                                <td>—</td>
                                <td>Выдерживает</td>
                            </tr>
                            <tr>
                                <td>9. Анисидиновое число</td>
                                <td>ГОСТ 31756</td>
                                <td>2,0</td>
                            </tr>
                            <tr>
                                <td>10. Содержание олеиновой кислоты, %</td>
                                <td>ГОСТ 30418</td>
                                <td>22,79</td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="font-bold">
                                    III. Прочие показатели
                                </td>
                            </tr>
                            <tr>
                                <td>Свинец, мг/кг</td>
                                <td>ГОСТ 30178</td>
                                <td>Менее 0,02</td>
                            </tr>
                            <tr>
                                <td>Кадмий, мг/кг</td>
                                <td>ГОСТ 30178</td>
                                <td>Менее 0,01</td>
                            </tr>
                            <tr>
                                <td>Мышьяк, мг/кг</td>
                                <td>ГОСТ 26930</td>
                                <td>Менее 0,01</td>
                            </tr>
                            <tr>
                                <td>Ртуть, мг/кг</td>
                                <td>МУ 5178</td>
                                <td>Менее 0,0005</td>
                            </tr>
                            <tr>
                                <td>Медь, мг/кг</td>
                                <td>ГОСТ 30178</td>
                                <td>0,052</td>
                            </tr>
                            <tr>
                                <td>Железо, мг/кг</td>
                                <td>ГОСТ 30178</td>
                                <td>Менее 0,1</td>
                            </tr>
                            <tr>
                                <td>Гексахлорциклогексан (альфа, бета, гамма-изомеры), мг/кг</td>
                                <td>МУ 2142</td>
                                <td>Менее 0,001</td>
                            </tr>
                            <tr>
                                <td>ДДТ и его метаболиты, мг/кг</td>
                                <td>МУ 2142</td>
                                <td>Менее 0,001</td>
                            </tr>
                            <tr>
                                <td>Цезий 137, Бк/кг</td>
                                <td>МУК 2.6.1.1194</td>
                                <td>Менее 3,0</td>
                            </tr>
                            <tr>
                                <td>Стронций 90, Бк/кг</td>
                                <td>МУК 2.6.1.1194</td>
                                <td>Менее 1,4</td>
                            </tr>
                            <tr>
                                <td>Промотор 35S</td>
                                <td>ГОСТ Р 52173</td>
                                <td>Отсутствует</td>
                            </tr>
                            <tr>
                                <td>Терминатор NOS</td>
                                <td>ГОСТ Р 52173</td>
                                <td>Отсутствует</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default OilSpecificationsTable;
