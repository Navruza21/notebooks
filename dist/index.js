System.register("type", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("data", [], function (exports_2, context_2) {
    "use strict";
    var categories, products;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("categories", categories = [
                {
                    id: 1,
                    name: "lenovo",
                    image: "https://3dnews.ru/assets/external/illustrations/2022/12/20/1079170/csm_IdeaPad_Pro_5_16_Zoll_Frost_Blue_02_1_5757e23409.jpg",
                },
                {
                    id: 2,
                    name: "asus",
                    image: "https://notebookoff.uz/upload/iblock/9cb/d5umadqz9s5xclsbb96vkxdpe4uii0jg.png",
                },
                {
                    id: 3,
                    name: "macboook",
                    image: "https://seventrade.uz/upload/resize_cache/iblock/b46/400_400_140cd750bba9870f18aada2478b24840a/6b9sus68jlbj4sc9to04vryvffh239wv.webp",
                },
                {
                    id: 4,
                    name: "acer",
                    image: "https://i5.walmartimages.com/seo/Acer-Aspire-1-A115-31-C2Y3-15-6-FHD-Laptop-Intel-Celeron-4GB-RAM-64GB-SSD-Windows-10-Home-in-S-mode-Charcoal-Black-NX-HE4AA-003_fc604dd8-8761-486d-80ff-59551a330dd5.2a4dd8b264365b821849532a3d7b3d73.jpeg",
                },
            ]);
            exports_2("products", products = [
                {
                    id: 1,
                    categoryId: 1,
                    status: "Active",
                    name: "ThinkPad X1 Carbon Gen 11 14-inch (Core i7-1355U )",
                    price: 1800,
                    image: "https://nout.uz/wp-content/uploads/2024/02/Thinkpad-P14s-1.jpg",
                },
                {
                    id: 2,
                    categoryId: 1,
                    status: "Active",
                    name: "Lenovo Legion 7 Pro (i9-13900HX/RTX4070/ENG-RU)",
                    price: 2300,
                    image: "https://nout.uz/wp-content/uploads/2023/04/Legion-7-pro-2.jpg",
                },
                {
                    id: 3,
                    categoryId: 2,
                    status: "Active",
                    name: "Ноутбук Asus Zenbook Pro 16X OLED (UX7602ZM-ME147W)",
                    price: 2200,
                    image: "https://seventrade.uz/upload/iblock/457/lmw7t67dkked6vzoassqiipmkxfqtb13.webp",
                },
                {
                    id: 4,
                    categoryId: 2,
                    status: "Active",
                    name: "Ультрабук Asus ZenBook 14 (90NB0WC1-M009Z0 / UX3402ZA-KM018W",
                    price: 1000,
                    image: "https://seventrade.uz/upload/iblock/368/zc73i933jjsjbcr2smu9iwwhg1jp1dk5.png",
                },
                {
                    id: 5,
                    categoryId: 3,
                    status: "Active",
                    name: "MacBook Pro 16.2 Apple M1 Pro (10C CPU/16C GPU), 32 ГБ, 512 ГБ, Серый космос",
                    price: 3000,
                    image: "https://it4profit.com/share/common/S1_Logo_1d1d1f_1.jpg",
                },
                {
                    id: 6,
                    categoryId: 3,
                    status: "Active",
                    name: "MacBook Air 15.3 Apple M3 (8C CPU/10C GPU), 8 ГБ, 256 ГБ, Сияющая звезда",
                    price: 2000,
                    image: "https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/b4/59/b45925ab9414422f23a1dff14737be6c/240305150026924232.webp",
                },
                {
                    id: 7,
                    categoryId: 3,
                    status: "Active",
                    name: "Ноутбук Apple MacBook Pro 16 М3 Pro Max 48GB/1TB Космический Серый",
                    price: 6000,
                    image: "https://allgood.uz/storage/products/January2024/99NPRMBpJrhYafOfpGTx-medium.webp",
                },
                {
                    id: 8,
                    categoryId: 4,
                    status: "Active",
                    name: "Ноутбук Acer 16'' (i7/1TB/16GB)",
                    price: 2000,
                    image: "https://seventrade.uz/upload/resize_cache/iblock/c4c/400_400_140cd750bba9870f18aada2478b24840a/rivvmnyyqtkg0yxw7mnkydpa5mk8ltg2.jpg",
                },
                {
                    id: 9,
                    categoryId: 4,
                    status: "Active",
                    name: "Acer Predator Helios 18 (i7-13700HX/RTX4060)",
                    price: 2000,
                    image: "https://nout.uz/wp-content/uploads/2023/08/Predator-Helios-182.jpg",
                },
                {
                    id: 10,
                    categoryId: 4,
                    status: "Active",
                    name: "Swift Go 16",
                    price: 1800,
                    image: "https://images.acer.com/is/image/acer/browse-popular-categories-laptops?$Product-Catagories-XL$",
                },
            ]);
        }
    };
});
System.register("modal", [], function (exports_3, context_3) {
    "use strict";
    var productModal;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            // @ts-ignore
            exports_3("productModal", productModal = new bootstrap.Modal("#productModal", {
                keyboard: false,
            }));
        }
    };
});
System.register("index", ["data", "modal"], function (exports_4, context_4) {
    "use strict";
    var data_1, modal_1, categoriesContainer, productsContainer, productsModal, selectedCategory, selectedProduct, renderCategories, renderProducts;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (data_1_1) {
                data_1 = data_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            }
        ],
        execute: function () {
            categoriesContainer = document.querySelector("#categories");
            productsContainer = document.querySelector("#products");
            productsModal = document.querySelector(".modal-body");
            selectedCategory = data_1.categories[0];
            renderCategories = function () {
                if (!categoriesContainer) {
                    console.error("categoriesContainer topilmadi");
                    return;
                }
                categoriesContainer.innerHTML = "";
                data_1.categories.map(function (category) {
                    var col = document.createElement("div");
                    col.className = "col-4 mb-2";
                    col.style.cursor = "pointer";
                    col.innerHTML = "\n        <img src=\"".concat(category.image, "\" alt=\"\" class=\"w-100 rounded overflow-hidden object-fit-cover\" style=\"height:200px\">\n        <p class=\"fw-bold mt-3\n        \">").concat(category.name, "</p>\n    ");
                    col.addEventListener("click", function () {
                        selectedCategory = category;
                        renderProducts();
                    });
                    categoriesContainer.appendChild(col);
                });
            };
            renderProducts = function () {
                if (!productsContainer) {
                    console.error("productsContainer topilmadi");
                    return;
                }
                productsContainer.innerHTML = "";
                var filteredProducts = data_1.products.filter(function (p) { return p.status == "Active" && selectedCategory.id == p.categoryId; });
                filteredProducts.map(function (p) {
                    var productItem = document.createElement("div");
                    productItem.className = "product-item rounded d-flex align-items-center gap-3 p-3";
                    productItem.innerHTML = "\n       <img\n          src=\"".concat(p.image, "\"\n          alt=\"\"\n          width=\"100\"\n          height=\"80\"\n          class=\"object-fit-cover rounded\"\n        />\n        <div class=\"\" style=\"flex: 1\">\n          <p class=\"fw-bold mb-1\">").concat(p.name, "</p>\n          <p class=\"mb-0\">").concat(p.price, " $</p>\n        </div>\n    ");
                    var btn = document.createElement("button");
                    btn.className = "btn";
                    btn.innerHTML = "<i class=\"fas fa-shopping-cart\"></i>";
                    btn.addEventListener("click", function () {
                        selectedProduct = p;
                        productsModal.innerHTML = " \n      <div class=\"p-3\">\n          <img\n          src=\"".concat(p.image, "\" class=\"object-fit-cover rounded w-100\"/>\n          <div class=\"\" style=\"flex: 1\">\n          <p class=\"fw-bold mb-1\">").concat(p.name, "</p>\n          <p class=\"mb-0\">").concat(p.price, " $</p>\n          </div>\n      </div>");
                        renderProducts();
                        modal_1.productModal.show();
                    });
                    productItem.appendChild(btn);
                    productsContainer.appendChild(productItem);
                });
            };
            window.onload = function () {
                renderCategories();
                renderProducts();
            };
        }
    };
});
