import React, { useEffect } from 'react';
import PromptDashboard from './Library/Components/Prompt/PromptDashboard';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../redux-rtk/features/chat/categoriesSlice';

const Dashboard = () => {

    // get :id from url params and set it to activeCategory
    const { id } = useParams();
    const dispatch = useDispatch()

    // set activeCategory to id

    useEffect(() => {

        // on change of id set activeCategory to id
        dispatch(setSelectedCategory(id));


    }, [id])

    const prompts = {
        data: [
            {
                _id: '1',
                title: 'Title 1',
                description: 'Description 1',
                category: 'Category 1',
                subCategory: 'Sub Category 1',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0

            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
            {
                _id: '2',
                title: 'Title 2',
                description: 'Description 2',
                category: 'Category 2',
                subCategory: 'Sub Category 2',
                createdAt: '2021-09-01T00:00:00.000Z',
                updatedAt: '2021-09-01T00:00:00.000Z',
                __v: 0
            },
        ]
    }
    return (
        <div className='p-5 h-full'>


            <div className="mx-4 relative h-full">
                <div className="z-50 bg-white">
                    <h1 className="flex gap-[15px] items-center text-[25px]">
                        <span className="text-[25px] font-extrabold	">
                            All Challenges
                        </span>
                    </h1>

                </div>

                <PromptDashboard
                    datas={prompts?.data}
                // promptLoading={promptLoading}
                // activeCategory={activeCategory}
                // activeSubCategory={activeSubCategory}
                />
                {/* <div className="h-full relative w-full left-0 top-0 overflow-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor blanditiis quas a quis praesentium accusamus ut? At sint sapiente, voluptas omnis eaque tenetur nobis distinctio nesciunt nisi facilis aspernatur ullam maxime libero dolore perferendis odio officia iusto explicabo similique quasi numquam inventore, quae itaque incidunt. Voluptas iusto eius, suscipit voluptatum, consectetur fuga quam, repellat neque magnam aperiam officia facilis provident dolorem natus deserunt fugit! Pariatur nobis, hic exercitationem sit reprehenderit ratione laborum! Porro esse corrupti cupiditate. Itaque aperiam sunt suscipit, quo at quas laboriosam quidem. Dolorum voluptates minima blanditiis deserunt laudantium, quis eos quae ut nam in odit, molestias architecto excepturi fugiat! Odio reiciendis porro velit magni fugiat aspernatur maxime voluptas excepturi minus architecto? Dolorem ratione dolore eos mollitia est, quas sint eveniet commodi aliquam animi excepturi adipisci tenetur sunt voluptatum praesentium autem perferendis veniam dicta incidunt ea! Officiis sequi delectus autem voluptates, sapiente ipsa doloremque voluptate illum totam itaque nesciunt sit sunt dignissimos, minus minima eligendi fugiat voluptatum maiores a quos fugit. Ab animi, nihil assumenda sunt unde repellendus necessitatibus perferendis similique quam, placeat culpa, excepturi itaque repellat quos numquam officia tempore nisi nam consequatur minima neque nostrum error. Quasi pariatur in voluptatum qui culpa facilis, excepturi fuga dolores eligendi, ipsam laboriosam! Est quasi accusantium dignissimos iusto, dolores vero pariatur fuga, iure tempora maiores qui eos eveniet eligendi atque molestias rerum corporis expedita architecto reiciendis, eius voluptatem aut accusamus saepe officiis. Illo hic ducimus voluptatem illum. Soluta autem inventore deleniti alias id libero odit est ut molestiae, laborum cum similique et nihil earum consectetur debitis facere neque nesciunt dicta, pariatur, magni vitae distinctio? Harum, hic nostrum? Dolorem error tenetur dolorum quia nisi nam, vero doloribus, illum adipisci sapiente incidunt quidem impedit tempora aperiam id et esse iste praesentium quibusdam amet officia molestias maiores obcaecati! Magni commodi officia soluta. Neque ipsa aperiam repellendus voluptate praesentium incidunt facere alias cupiditate ad, sequi minima, enim ratione eum aut, pariatur voluptatum inventore consequatur fugiat. Perspiciatis, inventore sequi vero similique non a quia, quae, sunt facere vel asperiores. Iste, et debitis vel accusantium nisi distinctio obcaecati consequatur? Dignissimos pariatur quibusdam facilis ipsum atque praesentium libero debitis vel? Distinctio aspernatur officiis error aut harum! Repellendus dolore aliquid deserunt velit nostrum rem eius! Reprehenderit, illum consequatur natus, temporibus sunt ea laborum ducimus voluptates nesciunt reiciendis commodi dignissimos laboriosam dolores itaque molestiae perspiciatis sit cum praesentium fugiat atque asperiores quam velit! Commodi quibusdam repudiandae dicta modi? Veniam nostrum animi alias quam perspiciatis ab et pariatur dolorum. Tempora voluptatibus, molestias dolorum consequatur laudantium consequuntur. Similique rerum assumenda unde! Id, corporis! Cupiditate consectetur ipsum voluptate optio? Est non vitae accusantium nihil sunt qui. Repellendus dolorum labore fugit, nihil qui iusto alias. Enim, dignissimos? Nemo enim tenetur illum autem numquam quisquam quia quidem vitae alias sit, qui voluptatem voluptas dolor molestias tempora aperiam praesentium accusantium animi pariatur. Officiis eius repellendus placeat maxime cumque sint blanditiis mollitia tempore iusto minima ratione corporis, incidunt ipsam dicta inventore, architecto sequi debitis voluptatibus adipisci suscipit. Laborum aut pariatur obcaecati consequuntur possimus praesentium vitae, officiis mollitia eum necessitatibus molestias quis, provident ut voluptatum. Iure vitae esse temporibus praesentium eaque ipsam sit obcaecati corrupti officiis distinctio reiciendis quam cum perspiciatis corporis blanditiis ut, cupiditate earum laudantium sint dignissimos commodi, dolores mollitia doloremque? Possimus, inventore nihil? Eligendi distinctio obcaecati rem molestias. Omnis rem, dicta saepe incidunt voluptatibus laudantium recusandae minima id maiores dolorum reprehenderit eveniet quod. Hic, enim. Pariatur facere alias laboriosam. Laboriosam, aspernatur exercitationem qui alias ab labore eaque mollitia dolorem fugit nihil? Adipisci animi, alias cum deserunt sunt voluptatem. Voluptatum sunt non vero corrupti perspiciatis rerum iure in illum, deleniti maiores distinctio nesciunt similique perferendis, qui doloribus rem possimus a libero aliquid minima architecto laudantium at? Ipsum ullam dicta temporibus rerum minima quas ducimus dignissimos beatae hic modi sint nesciunt impedit a iste excepturi sed nihil nemo, necessitatibus maxime molestiae atque vitae illum. Eum laudantium praesentium ut alias provident nesciunt magnam id iure cumque velit accusamus, sit quod nam incidunt dignissimos qui voluptas in, molestiae quasi culpa recusandae officia dolorum voluptatum. Tenetur temporibus rerum dicta, provident eligendi cum, vero libero velit ex distinctio animi, fugiat ipsam sint voluptatum minima sed molestiae aspernatur dignissimos blanditiis. Similique dignissimos delectus excepturi sint tempore iure, esse culpa dicta! Error fugit ex culpa, iure voluptatem, eligendi doloremque ea magni possimus provident sit! Voluptatibus, beatae sint? Dolor necessitatibus non sequi, similique maxime nobis animi qui id obcaecati. Cum, itaque natus consectetur nobis qui quos placeat pariatur laboriosam corporis veritatis provident magnam optio excepturi eos ea eum, quod reprehenderit, porro perferendis non quas officiis odio facilis. Nam repellendus, consectetur natus quis dolores, praesentium pariatur alias officia, eligendi non dolorum harum voluptatum et quia ipsam quaerat. Fugiat blanditiis odit, aspernatur ad quidem, magnam tempora perspiciatis veniam, laboriosam cum similique id praesentium repellat. Quis tenetur quisquam ut unde aperiam ducimus architecto rem impedit a debitis! Blanditiis aspernatur sapiente quasi dolore quidem voluptatem illo perferendis, modi, atque, ut quae velit explicabo in doloremque ipsa illum reprehenderit dolorum mollitia impedit corrupti commodi ipsam? Accusamus fuga repellendus fugit necessitatibus veritatis ullam debitis, neque impedit sit, recusandae voluptas vitae expedita natus minus dolorem, eveniet commodi dolor odit! Natus suscipit tempore sint, voluptatum dolores optio quo recusandae fugit velit dolor debitis in quidem dignissimos possimus rerum. Consequuntur, blanditiis. Sequi, quidem sapiente. Neque, maiores? Libero dolorum officia est nesciunt consequuntur quidem, repellendus omnis, ea itaque, temporibus id quis dolores at praesentium. Animi iusto quia modi at aspernatur veniam aliquid impedit ipsam adipisci nihil distinctio perferendis incidunt fuga quaerat, assumenda suscipit sed recusandae nostrum iste quis maxime, atque unde! Illo aspernatur enim, atque dolore placeat doloribus voluptate nostrum sunt animi et qui velit eligendi maxime quod voluptatum quidem tenetur expedita officiis facilis, eum ipsa tempore odio. Hic iste dolorem explicabo nesciunt ipsa? Asperiores atque a alias harum labore cumque porro eum aspernatur, perspiciatis vero aperiam repellat in unde deserunt. Vel fuga illo dolore nam saepe rerum provident voluptatum nostrum! Deserunt aliquam officia voluptas voluptate odit ipsam nihil impedit commodi exercitationem? Dignissimos ipsum recusandae veniam libero ad, rem quidem possimus atque voluptatem?
                </div> */}
            </div>

        </div>
    );
};

export default Dashboard;