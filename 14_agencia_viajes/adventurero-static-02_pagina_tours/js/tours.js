const filterSelect = document.querySelector('#filter-select');
const containerFilters = document.querySelectorAll('.container-filter');

filterSelect.addEvenListener('change', e => {
    const selectedValue = e.target.value;

    containerFilters.forEach(containerFilter => containerFilter.classList.remove('active')
);

    if (selectedValue === 'all') {
        containerFilters.forEach(containerFilter => containerFilter.classList.add('active')
    );
    }

    const matchingFilter = document.querySelector(`.contaner-filter[data-filter="${selectedValue}"]`
        
    );

    if (matchingFilter) {
        matchingFilter.classList.add('active');
    }


});
