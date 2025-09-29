// Multi-Step Form SPA with JavaScript routing
(function() {
  'use strict';

  // ===== STATE MANAGEMENT =====
  const formState = {
    currentStep: 1,
    totalSteps: 7,
    data: {
      step1: {},
      step2: { traits: [] },
      step3: { relationships: [], familyActivities: '' }
    }
  };

  // Date Picker state
  const datePickerState = {
    currentDate: new Date(),
    selectedDate: null,
    targetInput: null,
    minDate: null,
    maxDate: null
  };

  // Relationship types for Step 3
  const relationshipTypes = {
    immediate: [
      { emoji: '👩', label: 'Mother' },
      { emoji: '👨', label: 'Father' },
      { emoji: '👦', label: 'Son' },
      { emoji: '👧', label: 'Daughter' },
      { emoji: '👭', label: 'Sister' },
      { emoji: '👬', label: 'Brother' },
      { emoji: '💍', label: 'Spouse' },
      { emoji: '💖', label: 'Partner' }
    ],
    extended: [
      { emoji: '👵', label: 'Grandmother' },
      { emoji: '👴', label: 'Grandfather' },
      { emoji: '👶', label: 'Grandchild' },
      { emoji: '👨', label: 'Uncle' },
      { emoji: '👩', label: 'Aunt' },
      { emoji: '👦', label: 'Nephew' },
      { emoji: '👧', label: 'Niece' },
      { emoji: '👨', label: 'Cousin' }
    ],
    close: [
      { emoji: '🤝', label: 'Best Friend' },
      { emoji: '👥', label: 'Friend' },
      { emoji: '🏆', label: 'Mentor' },
      { emoji: '🎓', label: 'Colleague' }
    ]
  };

  // Personality traits for Step 2
  const personalityTraits = [
    { emoji: '🤔', label: 'Curious' },
    { emoji: '🌱', label: 'Resilient' },
    { emoji: '💝', label: 'Kind' },
    { emoji: '🙌', label: 'Supportive' },
    { emoji: '🎯', label: 'Determined' },
    { emoji: '🫂', label: 'Empathetic' },
    { emoji: '✅', label: 'Responsible' },
    { emoji: '⌛', label: 'Patient' },
    { emoji: '👑', label: 'Confident' },
    { emoji: '🤲', label: 'Generous' },
    { emoji: '🤝', label: 'Loyal' },
    { emoji: '🙏', label: 'Humble' },
    { emoji: '🎨', label: 'Creative' },
    { emoji: '📋', label: 'Organized' },
    { emoji: '🕊️', label: 'Compassionate' },
    { emoji: '💯', label: 'Honest' },
    { emoji: '💪', label: 'Hardworking' },
    { emoji: '🌞', label: 'Optimistic' },
    { emoji: '🧠', label: 'Intelligent' }
  ];

  // ===== STEP TEMPLATES =====

  function renderStep1() {
    return `
      <div class="form-card">
        <div class="form-card__heading">
          <div class="form-card__step">
            <i class="ph-fill ph-heart"></i>
            <span class="form-card__step-label">STEP 1 OF 7</span>
          </div>
          <h1 class="form-card__title">Capturing Essential Details</h1>
          <p class="form-card__description">Let's gather the key information to honor your loved one's life journey.</p>
        </div>

        <div role="status" aria-live="polite" aria-atomic="true" class="sr-only" id="form-status"></div>

        <form class="form-fields" id="current-step-form" novalidate>
          <div class="form-group">
            <label for="full-name" class="form-label">Full Name<span class="form-label__required">*</span></label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              class="form-input"
              placeholder="e.g, John Arthur Doe"
              value="${formState.data.step1.fullName || ''}"
              required
              aria-required="true"
              aria-invalid="false"
            >
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="preferred-name" class="form-label">Preferred Name</label>
              <input
                type="text"
                id="preferred-name"
                name="preferredName"
                class="form-input"
                placeholder="Optional nickname (e.g, Jack)"
                value="${formState.data.step1.preferredName || ''}"
              >
            </div>

            <div class="form-group">
              <label for="gender" class="form-label">Gender<span class="form-label__required">*</span></label>
              <div class="form-select-wrapper">
                <select id="gender" name="gender" class="form-select" required aria-required="true" aria-invalid="false">
                  <option value="">Select gender from the options</option>
                  <option value="male" ${formState.data.step1.gender === 'male' ? 'selected' : ''}>Male</option>
                  <option value="female" ${formState.data.step1.gender === 'female' ? 'selected' : ''}>Female</option>
                </select>
                <i class="ph-bold ph-caret-down form-select__icon"></i>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="date-birth" class="form-label">Date of Birth<span class="form-label__required">*</span></label>
              <div class="form-date-wrapper">
                <input
                  type="text"
                  id="date-birth"
                  name="dateBirth"
                  class="form-input form-input--date"
                  placeholder="dd/mm/yyyy"
                  value="${formState.data.step1.dateBirth || ''}"
                  readonly
                  required
                  aria-required="true"
                  aria-invalid="false"
                >
                <i class="ph-bold ph-calendar-blank form-date__icon"></i>
              </div>
            </div>

            <div class="form-group">
              <label for="date-passing" class="form-label">Date of Passing<span class="form-label__required">*</span></label>
              <div class="form-date-wrapper">
                <input
                  type="text"
                  id="date-passing"
                  name="datePassing"
                  class="form-input form-input--date"
                  placeholder="dd/mm/yyyy"
                  value="${formState.data.step1.datePassing || ''}"
                  readonly
                  required
                  aria-required="true"
                  aria-invalid="false"
                >
                <i class="ph-bold ph-calendar-blank form-date__icon"></i>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="place-birth" class="form-label">Place of Birth<span class="form-label__required">*</span></label>
              <input
                type="text"
                id="place-birth"
                name="placeBirth"
                class="form-input"
                placeholder="e.g, Houston, Texas"
                value="${formState.data.step1.placeBirth || ''}"
                required
                aria-required="true"
                aria-invalid="false"
              >
            </div>

            <div class="form-group">
              <label for="place-passing" class="form-label">Place of Passing<span class="form-label__required">*</span></label>
              <input
                type="text"
                id="place-passing"
                name="placePassing"
                class="form-input"
                placeholder="e.g, at home in Chicago, IL"
                value="${formState.data.step1.placePassing || ''}"
                required
                aria-required="true"
                aria-invalid="false"
              >
            </div>
          </div>

          <div class="form-group">
            <label for="cause-passing" class="form-label">Cause of Passing (Optional)</label>
            <input
              type="text"
              id="cause-passing"
              name="causePassing"
              class="form-input"
              placeholder="e.g., After a long battle with cancer"
              value="${formState.data.step1.causePassing || ''}"
            >
          </div>
        </form>
      </div>
    `;
  }

  function renderStep2() {
    const selectedTraits = formState.data.step2.traits || [];

    const traitsHTML = personalityTraits.map(trait => {
      const isSelected = selectedTraits.includes(trait.label);
      const isDisabled = !isSelected && selectedTraits.length >= 5;

      return `
        <button
          type="button"
          class="trait-chip ${isSelected ? 'trait-chip--selected' : ''} ${isDisabled ? 'trait-chip--disabled' : ''}"
          data-trait="${trait.label}"
          ${isDisabled ? 'disabled' : ''}
        >
          ${trait.emoji} ${trait.label}
        </button>
      `;
    }).join('');

    return `
      <div class="form-card">
        <div class="form-card__heading">
          <div class="form-card__step">
            <i class="ph-fill ph-star"></i>
            <span class="form-card__step-label">STEP 2 OF 7</span>
          </div>
          <h1 class="form-card__title">Capturing Their Personality</h1>
          <p class="form-card__description">Let's create a story as unique as the life they lived.</p>
        </div>

        <form class="form-fields" id="current-step-form">
          <div class="form-group">
            <label class="form-label">Select up to 5 traits that best capture their personality.<span class="form-label__required">*</span></label>
            <div class="trait-chips" id="trait-chips">
              ${traitsHTML}
            </div>
          </div>

          <div class="form-group">
            <label for="description" class="form-label">Describe them in one sentence<span class="form-label__required">*</span></label>
            <textarea
              id="description"
              name="description"
              class="form-textarea"
              placeholder="She was a devoted mom and teacher who loved music and making people smile."
              required
            >${formState.data.step2.description || ''}</textarea>
          </div>

          <div class="form-group">
            <label for="motto" class="form-label">Favorite Saying or Motto</label>
            <input
              type="text"
              id="motto"
              name="motto"
              class="form-input"
              placeholder="eg, Live and let live"
              value="${formState.data.step2.motto || ''}"
            >
          </div>
        </form>
      </div>
    `;
  }

  function renderStep3() {
    const relationships = formState.data.step3.relationships || [];

    // Ensure there's always at least one empty relationship row
    if (relationships.length === 0) {
      relationships.push({
        name: '',
        type: '',
        emoji: '',
        deceased: false
      });
      formState.data.step3.relationships = relationships;
    }

    const relationshipsHTML = relationships.map((rel, index) => `
      <div class="relationship-item" data-index="${index}">
        <div class="relationship-item__fields">
          <div class="relationship-item__name">
            <input
              type="text"
              class="form-input"
              placeholder="Full name"
              value="${rel.name || ''}"
              data-field="name"
            >
          </div>
          <div class="relationship-item__type">
            <button
              type="button"
              class="form-input relationship-type-btn"
              data-field="type"
            >
              <span>${rel.type ? `${rel.emoji} ${rel.type}` : 'Select relationship'}</span>
              <i class="ph-bold ph-caret-down"></i>
            </button>
          </div>
        </div>
        <div class="relationship-item__checkbox">
          <div class="custom-checkbox ${rel.deceased ? 'custom-checkbox--checked' : ''}" data-field="deceased">
          </div>
          <label class="custom-checkbox__label">Deceased</label>
        </div>
        <button type="button" class="relationship-item__remove" aria-label="Remove relationship">
          <i class="ph-bold ph-trash"></i>
        </button>
      </div>
    `).join('');

    return `
      <div class="form-card">
        <div class="form-card__heading">
          <div class="form-card__step">
            <i class="ph-fill ph-users"></i>
            <span class="form-card__step-label">STEP 3 OF 7</span>
          </div>
          <h1 class="form-card__title">Family & Relationships</h1>
          <p class="form-card__description">Who were the most significant people in their life, such as family members, partners, or close friends?</p>
        </div>

        <form class="form-fields" id="current-step-form">
          <div class="form-group">
            <div class="relationship-list" id="relationship-list">
              ${relationshipsHTML}
            </div>
            <button type="button" class="btn--add-relationship" id="add-relationship-btn">
              Add family member
              <i class="ph-bold ph-plus-circle"></i>
            </button>
          </div>

          <div class="form-group">
            <label for="family-activities" class="form-label">Family Activities & Traditions</label>
            <textarea
              id="family-activities"
              name="familyActivities"
              class="form-textarea"
              placeholder="e.g., Sunday pancake breakfasts"
            >${formState.data.step3.familyActivities || ''}</textarea>
          </div>
        </form>
      </div>
    `;
  }

  // ===== STEP MANAGEMENT =====

  function renderStep(stepNumber) {
    const container = document.getElementById('step-container');

    switch(stepNumber) {
      case 1:
        container.innerHTML = renderStep1();
        initStep1Handlers();
        break;
      case 2:
        container.innerHTML = renderStep2();
        initStep2Handlers();
        break;
      case 3:
        container.innerHTML = renderStep3();
        initStep3Handlers();
        break;
      default:
        container.innerHTML = '<p>Step not implemented yet</p>';
    }

    updateProgress(stepNumber);
    updateHeaderBackButton(stepNumber);
  }

  function navigateToStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > formState.totalSteps) return;

    formState.currentStep = stepNumber;
    renderStep(stepNumber);
    saveToSessionStorage();
  }

  function validateCurrentStep() {
    const form = document.getElementById('current-step-form');
    if (!form) return true;

    const formData = new FormData(form);
    let isValid = true;

    // Check required fields
    const requiredInputs = form.querySelectorAll('[required]');
    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.setAttribute('aria-invalid', 'true');
      } else {
        input.setAttribute('aria-invalid', 'false');
      }
    });

    // Step-specific validation
    if (formState.currentStep === 1) {
      const birthDate = parseDate(formData.get('dateBirth'));
      const passingDate = parseDate(formData.get('datePassing'));

      if (birthDate && passingDate && passingDate < birthDate) {
        alert('Date of passing must be after date of birth');
        return false;
      }
    }

    if (formState.currentStep === 2) {
      const traits = formState.data.step2.traits || [];
      if (traits.length === 0) {
        alert('Please select at least one personality trait');
        return false;
      }
    }

    if (!isValid) {
      alert('Please fill in all required fields');
    }

    return isValid;
  }

  function saveCurrentStep() {
    const form = document.getElementById('current-step-form');
    if (!form) return;

    const formData = new FormData(form);
    const data = {};

    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    // Save to state
    if (formState.currentStep === 1) {
      formState.data.step1 = data;
    } else if (formState.currentStep === 2) {
      formState.data.step2 = {
        ...formState.data.step2,
        ...data
      };
    } else if (formState.currentStep === 3) {
      formState.data.step3 = {
        ...formState.data.step3,
        familyActivities: data.familyActivities || ''
      };
    }

    saveToSessionStorage();
  }

  // ===== STEP-SPECIFIC HANDLERS =====

  function initStep1Handlers() {
    // Initialize date pickers
    const dateInputs = document.querySelectorAll('.form-input--date');
    dateInputs.forEach(input => {
      const wrapper = input.closest('.form-date-wrapper');
      if (wrapper) {
        wrapper.addEventListener('click', () => openDatePicker(input));
      }
    });
  }

  function initStep2Handlers() {
    // Trait chip selection
    const traitChips = document.getElementById('trait-chips');
    if (traitChips) {
      traitChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.trait-chip');
        if (!chip || chip.disabled) return;

        const trait = chip.getAttribute('data-trait');
        const selectedTraits = formState.data.step2.traits || [];

        if (selectedTraits.includes(trait)) {
          // Deselect
          formState.data.step2.traits = selectedTraits.filter(t => t !== trait);
        } else if (selectedTraits.length < 5) {
          // Select
          formState.data.step2.traits = [...selectedTraits, trait];
        }

        // Optimized: Update only affected chips instead of full re-render
        updateTraitChipsState();
      });
    }
  }

  function updateTraitChipsState() {
    const selectedTraits = formState.data.step2.traits || [];
    const chips = document.querySelectorAll('.trait-chip');

    chips.forEach(chip => {
      const trait = chip.getAttribute('data-trait');
      const isSelected = selectedTraits.includes(trait);
      const isDisabled = !isSelected && selectedTraits.length >= 5;

      // Update classes
      chip.classList.toggle('trait-chip--selected', isSelected);
      chip.classList.toggle('trait-chip--disabled', isDisabled);
      chip.disabled = isDisabled;
    });
  }

  function initStep3Handlers() {
    // Add relationship button
    const addBtn = document.getElementById('add-relationship-btn');
    if (addBtn) {
      addBtn.addEventListener('click', addRelationship);
    }

    // Relationship list event delegation
    const relationshipList = document.getElementById('relationship-list');
    if (relationshipList) {
      relationshipList.addEventListener('click', handleRelationshipListClick);
      relationshipList.addEventListener('input', handleRelationshipInput);
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', closeAllDropdowns);
  }

  function addRelationship() {
    const relationships = formState.data.step3.relationships || [];
    relationships.push({
      name: '',
      type: '',
      emoji: '',
      deceased: false
    });
    formState.data.step3.relationships = relationships;
    renderStep(3);
  }

  function handleRelationshipListClick(e) {
    // Remove relationship
    const removeBtn = e.target.closest('.relationship-item__remove');
    if (removeBtn) {
      const item = removeBtn.closest('.relationship-item');
      const index = parseInt(item.getAttribute('data-index'), 10);
      formState.data.step3.relationships.splice(index, 1);
      renderStep(3);
      return;
    }

    // Toggle deceased checkbox
    const checkbox = e.target.closest('.custom-checkbox');
    if (checkbox) {
      const item = checkbox.closest('.relationship-item');
      const index = parseInt(item.getAttribute('data-index'), 10);
      const rel = formState.data.step3.relationships[index];
      rel.deceased = !rel.deceased;
      checkbox.classList.toggle('custom-checkbox--checked');
      return;
    }

    // Open relationship dropdown
    const typeBtn = e.target.closest('.relationship-type-btn');
    if (typeBtn) {
      e.stopPropagation();
      const item = typeBtn.closest('.relationship-item');
      const index = parseInt(item.getAttribute('data-index'), 10);
      openRelationshipDropdown(typeBtn, index);
      return;
    }
  }

  function handleRelationshipInput(e) {
    const input = e.target;
    if (!input.classList.contains('form-input')) return;

    const item = input.closest('.relationship-item');
    if (!item) return;

    const index = parseInt(item.getAttribute('data-index'), 10);
    const field = input.getAttribute('data-field');

    if (field === 'name') {
      formState.data.step3.relationships[index].name = input.value;
    }
  }

  function openRelationshipDropdown(button, relationshipIndex) {
    closeAllDropdowns();

    const typeWrapper = button.closest('.relationship-item__type');
    const dropdown = createRelationshipDropdown(relationshipIndex);

    typeWrapper.style.position = 'relative';
    typeWrapper.appendChild(dropdown);

    // Focus search input
    const searchInput = dropdown.querySelector('.relationship-dropdown__search');
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 10);
    }
  }

  function createRelationshipDropdown(relationshipIndex) {
    const dropdown = document.createElement('div');
    dropdown.className = 'relationship-dropdown';
    dropdown.setAttribute('data-relationship-index', relationshipIndex);

    const allTypes = [
      ...relationshipTypes.immediate,
      ...relationshipTypes.extended,
      ...relationshipTypes.close
    ];

    dropdown.innerHTML = `
      <input
        type="text"
        class="relationship-dropdown__search"
        placeholder="Find relationship"
        autocomplete="off"
      >
      <div class="relationship-dropdown__categories">
        <div class="relationship-dropdown__category">
          <span class="relationship-dropdown__category-label">Immediate Family</span>
          ${relationshipTypes.immediate.map(type => `
            <button
              type="button"
              class="relationship-dropdown__item"
              data-type="${type.label}"
              data-emoji="${type.emoji}"
            >
              ${type.emoji} ${type.label}
            </button>
          `).join('')}
        </div>
        <div class="relationship-dropdown__category">
          <span class="relationship-dropdown__category-label">Extended Family</span>
          ${relationshipTypes.extended.map(type => `
            <button
              type="button"
              class="relationship-dropdown__item"
              data-type="${type.label}"
              data-emoji="${type.emoji}"
            >
              ${type.emoji} ${type.label}
            </button>
          `).join('')}
        </div>
        <div class="relationship-dropdown__category">
          <span class="relationship-dropdown__category-label">Close Relationships</span>
          ${relationshipTypes.close.map(type => `
            <button
              type="button"
              class="relationship-dropdown__item"
              data-type="${type.label}"
              data-emoji="${type.emoji}"
            >
              ${type.emoji} ${type.label}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // Search functionality with "Create custom" option
    const searchInput = dropdown.querySelector('.relationship-dropdown__search');
    const categoriesContainer = dropdown.querySelector('.relationship-dropdown__categories');

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const items = dropdown.querySelectorAll('.relationship-dropdown__item');
      const categories = dropdown.querySelectorAll('.relationship-dropdown__category');

      // Remove any existing create button
      const existingCreateBtn = dropdown.querySelector('.relationship-dropdown__create');
      if (existingCreateBtn) {
        existingCreateBtn.remove();
      }

      let hasVisibleItems = false;

      items.forEach(item => {
        const type = item.getAttribute('data-type').toLowerCase();
        if (type.includes(query)) {
          item.style.display = 'block';
          hasVisibleItems = true;
        } else {
          item.style.display = 'none';
        }
      });

      // Hide empty categories
      categories.forEach(category => {
        const visibleItems = category.querySelectorAll('.relationship-dropdown__item:not([style*="display: none"])');
        if (visibleItems.length === 0) {
          category.style.display = 'none';
        } else {
          category.style.display = 'block';
        }
      });

      // Show "Create custom" if query doesn't match any items and has content
      if (!hasVisibleItems && query.length > 0) {
        const createBtn = document.createElement('button');
        createBtn.type = 'button';
        createBtn.className = 'relationship-dropdown__item relationship-dropdown__create';
        createBtn.innerHTML = `Add: <strong>${e.target.value}</strong>`;
        createBtn.setAttribute('data-custom-type', e.target.value);

        categoriesContainer.appendChild(createBtn);
      }
    });

    // Item selection
    dropdown.addEventListener('click', (e) => {
      const item = e.target.closest('.relationship-dropdown__item');
      if (!item) return;

      // Check if it's a custom type or predefined type
      const customType = item.getAttribute('data-custom-type');
      if (customType) {
        // Custom relationship type
        formState.data.step3.relationships[relationshipIndex].type = customType;
        formState.data.step3.relationships[relationshipIndex].emoji = '👤';
      } else {
        // Predefined relationship type
        const type = item.getAttribute('data-type');
        const emoji = item.getAttribute('data-emoji');
        formState.data.step3.relationships[relationshipIndex].type = type;
        formState.data.step3.relationships[relationshipIndex].emoji = emoji;
      }

      renderStep(3);
    });

    return dropdown;
  }

  function closeAllDropdowns(e) {
    const dropdowns = document.querySelectorAll('.relationship-dropdown');
    dropdowns.forEach(dropdown => dropdown.remove());
  }

  // ===== PROGRESS & UI UPDATES =====

  function updateProgress(stepNumber) {
    const progress = (stepNumber / formState.totalSteps) * 100;
    const progressBar = document.querySelector('.form-header__progress-bar');
    const progressElement = document.querySelector('.form-header__progress');

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (progressElement) {
      progressElement.setAttribute('aria-valuenow', progress.toFixed(2));
      progressElement.setAttribute('aria-label', `Step ${stepNumber} of ${formState.totalSteps}`);
    }
  }

  function updateHeaderBackButton(stepNumber) {
    const headerBackBtn = document.querySelector('.form-header__back');
    if (headerBackBtn) {
      headerBackBtn.style.display = stepNumber > 1 ? 'flex' : 'none';
    }
  }

  // ===== NAVIGATION HANDLERS =====

  function handleNext() {
    if (!validateCurrentStep()) return;

    saveCurrentStep();

    if (formState.currentStep < formState.totalSteps) {
      navigateToStep(formState.currentStep + 1);
    } else {
      // Final step - submit form
      console.log('Form completed:', formState.data);
      alert('Form completed! Data saved to console.');
    }
  }

  function handleBack() {
    saveCurrentStep();

    if (formState.currentStep > 1) {
      navigateToStep(formState.currentStep - 1);
    }
  }

  // ===== DATA PERSISTENCE =====

  function saveToSessionStorage() {
    try {
      sessionStorage.setItem('momentsWriterFormData', JSON.stringify(formState.data));
      sessionStorage.setItem('momentsWriterCurrentStep', formState.currentStep.toString());
    } catch (error) {
      console.error('Error saving to sessionStorage:', error);
    }
  }

  function loadFromSessionStorage() {
    try {
      const savedData = sessionStorage.getItem('momentsWriterFormData');
      const savedStep = sessionStorage.getItem('momentsWriterCurrentStep');

      if (savedData) {
        formState.data = JSON.parse(savedData);
      }

      if (savedStep) {
        formState.currentStep = parseInt(savedStep, 10);
      }
    } catch (error) {
      console.error('Error loading from sessionStorage:', error);
    }
  }

  // ===== DATE PICKER =====

  function initDatePicker() {
    const overlay = document.getElementById('date-picker-overlay');
    const closeBtn = document.querySelector('.date-picker__close');
    const navBtns = document.querySelectorAll('.date-picker__nav-btn');
    const todayBtn = document.querySelector('[data-action="today"]');
    const selectBtn = document.querySelector('[data-action="select"]');

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeDatePicker();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeDatePicker);
    }

    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        handleDateNavigation(action);
      });
    });

    if (todayBtn) {
      todayBtn.addEventListener('click', selectToday);
    }

    if (selectBtn) {
      selectBtn.addEventListener('click', confirmDateSelection);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDatePicker();
    });
  }

  function openDatePicker(input) {
    datePickerState.targetInput = input;

    if (input.id === 'date-passing') {
      const birthInput = document.getElementById('date-birth');
      if (birthInput && birthInput.value) {
        datePickerState.minDate = parseDate(birthInput.value);
      }
    } else if (input.id === 'date-birth') {
      const passingInput = document.getElementById('date-passing');
      if (passingInput && passingInput.value) {
        datePickerState.maxDate = parseDate(passingInput.value);
      }
    }

    if (input.value) {
      const existingDate = parseDate(input.value);
      if (existingDate) {
        datePickerState.currentDate = new Date(existingDate);
        datePickerState.selectedDate = new Date(existingDate);
      }
    } else {
      datePickerState.currentDate = new Date();
      datePickerState.selectedDate = null;
    }

    renderCalendar();

    const overlay = document.getElementById('date-picker-overlay');
    if (overlay) {
      overlay.removeAttribute('hidden');
    }
  }

  function closeDatePicker() {
    const overlay = document.getElementById('date-picker-overlay');
    if (overlay) {
      overlay.setAttribute('hidden', '');
    }

    datePickerState.minDate = null;
    datePickerState.maxDate = null;

    if (datePickerState.targetInput) {
      datePickerState.targetInput.focus();
    }
  }

  function handleDateNavigation(action) {
    const current = datePickerState.currentDate;

    switch(action) {
      case 'prev-year':
        current.setFullYear(current.getFullYear() - 1);
        break;
      case 'next-year':
        current.setFullYear(current.getFullYear() + 1);
        break;
      case 'prev-month':
        current.setMonth(current.getMonth() - 1);
        break;
      case 'next-month':
        current.setMonth(current.getMonth() + 1);
        break;
    }

    renderCalendar();
  }

  function selectToday() {
    const today = new Date();
    datePickerState.selectedDate = today;
    datePickerState.currentDate = new Date(today);
    renderCalendar();
  }

  function confirmDateSelection() {
    if (datePickerState.selectedDate && datePickerState.targetInput) {
      const formattedDate = formatDate(datePickerState.selectedDate);
      datePickerState.targetInput.value = formattedDate;
      datePickerState.targetInput.setAttribute('aria-invalid', 'false');
      closeDatePicker();
    }
  }

  function renderCalendar() {
    const current = datePickerState.currentDate;
    const year = current.getFullYear();
    const month = current.getMonth();

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonthEl = document.getElementById('current-month');
    if (currentMonthEl) {
      currentMonthEl.textContent = `${monthNames[month]} ${year}`;
    }

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);

    const firstDayOfWeek = firstDay.getDay();
    const lastDateOfMonth = lastDay.getDate();
    const prevLastDateOfMonth = prevLastDay.getDate();

    const daysContainer = document.getElementById('calendar-days');
    if (!daysContainer) return;

    daysContainer.innerHTML = '';

    // Previous month days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = prevLastDateOfMonth - i;
      const btn = createDayButton(day, 'prev-month', year, month - 1);
      daysContainer.appendChild(btn);
    }

    // Current month days
    for (let day = 1; day <= lastDateOfMonth; day++) {
      const btn = createDayButton(day, 'current-month', year, month);
      daysContainer.appendChild(btn);
    }

    // Next month days
    const remainingDays = 42 - (firstDayOfWeek + lastDateOfMonth);
    for (let day = 1; day <= remainingDays; day++) {
      const btn = createDayButton(day, 'next-month', year, month + 1);
      daysContainer.appendChild(btn);
    }
  }

  function createDayButton(day, monthType, year, month) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'date-picker__day';
    btn.textContent = day;

    const date = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (monthType !== 'current-month') {
      btn.classList.add('date-picker__day--other-month');
    }

    if (isSameDay(date, today)) {
      btn.classList.add('date-picker__day--today');
    }

    if (datePickerState.selectedDate && isSameDay(date, datePickerState.selectedDate)) {
      btn.classList.add('date-picker__day--selected');
    }

    const isDisabled = (datePickerState.minDate && date < datePickerState.minDate) ||
                      (datePickerState.maxDate && date > datePickerState.maxDate);

    if (isDisabled) {
      btn.disabled = true;
    } else {
      btn.addEventListener('click', () => {
        datePickerState.selectedDate = date;
        renderCalendar();
      });
    }

    return btn;
  }

  function isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function parseDate(dateStr) {
    if (!dateStr) return null;
    const parts = dateStr.split('/');
    if (parts.length !== 3) return null;
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }

  // ===== INITIALIZATION =====

  function init() {
    // Load saved data
    loadFromSessionStorage();

    // Initialize date picker
    initDatePicker();

    // Navigation buttons
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');
    const headerBackBtn = document.querySelector('.form-header__back');

    if (backBtn) {
      backBtn.addEventListener('click', handleBack);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', handleNext);
    }

    if (headerBackBtn) {
      headerBackBtn.addEventListener('click', handleBack);
    }

    // Render initial step
    renderStep(formState.currentStep);
  }

  // Start the app
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();