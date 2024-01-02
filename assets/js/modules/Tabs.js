// Class Tabs

export class Tabs {

    constructor ({ tabs, buttons, activeClass, noneClass }) {
        
        // Class Elements

        this._tabs = document.querySelectorAll(tabs);
        this._buttons = document.querySelectorAll(buttons);

        // System Properties

        this._activeClass = activeClass;
        this._noneClass = noneClass;

        // Events

        this.addEvents();
    }

    // Methods

    closeAllTabs() {
        this._tabs.forEach(tab => {
            tab.classList.add(this._noneClass);
        });
    }

    clearAllActiveClasses() {
        this._buttons.forEach(btn => {
            btn.classList.remove(this._activeClass);
        });
    }

    setActiveTab(event) {
        const currentBtn = event.currentTarget;
        const dataTab = currentBtn.getAttribute("data-tab");

        this.closeAllTabs();
        this.clearAllActiveClasses();

        this._tabs.forEach(tab => {
            if (tab.getAttribute("data-tab") == dataTab) {
                tab.classList.remove(this._noneClass);
            }
        });

        currentBtn.classList.add(this._activeClass);
    }

    addEvents() {

        this._buttons.forEach(btn => {
            btn.addEventListener("click", (event) => this.setActiveTab(event));
        });

    }

}