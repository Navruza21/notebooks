import { categories, products } from "./data";
import { Category, Product } from "./type";
// @ts-ignore
import { productModal } from "./modal";

const categoriesContainer = document.querySelector("#categories");
const productsContainer = document.querySelector("#products");
const productsModal = document.querySelector(".modal-body") as HTMLElement;
let selectedCategory: Category = categories[0];
let selectedProduct: Product;

const renderCategories = () => {
  if (!categoriesContainer) {
    console.error("categoriesContainer topilmadi");
    return;
  }

  categoriesContainer.innerHTML = "";

  categories.map((category) => {
    const col = document.createElement("div");
    col.className = "col-4 mb-2";
    col.style.cursor = "pointer";
    col.innerHTML = `
        <img src="${category.image}" alt="" class="w-100 rounded overflow-hidden object-fit-cover" style="height:200px">
        <p class="fw-bold mt-3
        ">${category.name}</p>
    `;

    col.addEventListener("click", () => {
      selectedCategory = category;
      renderProducts();
    });

    categoriesContainer.appendChild(col);
  });
};

const renderProducts = () => {
  if (!productsContainer) {
    console.error("productsContainer topilmadi");
    return;
  }

  productsContainer.innerHTML = ``;

  const filteredProducts = products.filter(
    (p) => p.status == "Active" && selectedCategory.id == p.categoryId
  );

  filteredProducts.map((p) => {
    const productItem = document.createElement("div");
    productItem.className = `product-item rounded d-flex align-items-center gap-3 p-3`;
    productItem.innerHTML = `
       <img
          src="${p.image}"
          alt=""
          width="100"
          height="80"
          class="object-fit-cover rounded"
        />
        <div class="" style="flex: 1">
          <p class="fw-bold mb-1">${p.name}</p>
          <p class="mb-0">${p.price} $</p>
        </div>
    `;

    const btn = document.createElement("button");
    btn.className = `btn`;
    btn.innerHTML = `<i class="fas fa-shopping-cart"></i>`;
    btn.addEventListener("click", () => {
      selectedProduct = p;
      productsModal.innerHTML = ` 
      <div class="p-3">
          <img
          src="${p.image}" class="object-fit-cover rounded w-100"/>
          <div class="" style="flex: 1">
          <p class="fw-bold mb-1">${p.name}</p>
          <p class="mb-0">${p.price} $</p>
          </div>
      </div>`;
      renderProducts();
      productModal.show();
    });

    productItem.appendChild(btn);

    productsContainer.appendChild(productItem);
  });
};

window.onload = () => {
  renderCategories();
  renderProducts();
};
