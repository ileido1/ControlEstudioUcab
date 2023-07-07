'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">inscripciones documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-c19c2e2a6dceb4c50afed42e84f1450dfaba1ae2d0ee7093cd9af45d669129f8e20a971a9031c1dca5e57fd6ad2dc7e74f69943a0c4d9100e9f8a3e6f910a93b"' : 'data-bs-target="#xs-controllers-links-module-AppModule-c19c2e2a6dceb4c50afed42e84f1450dfaba1ae2d0ee7093cd9af45d669129f8e20a971a9031c1dca5e57fd6ad2dc7e74f69943a0c4d9100e9f8a3e6f910a93b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c19c2e2a6dceb4c50afed42e84f1450dfaba1ae2d0ee7093cd9af45d669129f8e20a971a9031c1dca5e57fd6ad2dc7e74f69943a0c4d9100e9f8a3e6f910a93b"' :
                                            'id="xs-controllers-links-module-AppModule-c19c2e2a6dceb4c50afed42e84f1450dfaba1ae2d0ee7093cd9af45d669129f8e20a971a9031c1dca5e57fd6ad2dc7e74f69943a0c4d9100e9f8a3e6f910a93b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-c19c2e2a6dceb4c50afed42e84f1450dfaba1ae2d0ee7093cd9af45d669129f8e20a971a9031c1dca5e57fd6ad2dc7e74f69943a0c4d9100e9f8a3e6f910a93b"' : 'data-bs-target="#xs-injectables-links-module-AppModule-c19c2e2a6dceb4c50afed42e84f1450dfaba1ae2d0ee7093cd9af45d669129f8e20a971a9031c1dca5e57fd6ad2dc7e74f69943a0c4d9100e9f8a3e6f910a93b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c19c2e2a6dceb4c50afed42e84f1450dfaba1ae2d0ee7093cd9af45d669129f8e20a971a9031c1dca5e57fd6ad2dc7e74f69943a0c4d9100e9f8a3e6f910a93b"' :
                                        'id="xs-injectables-links-module-AppModule-c19c2e2a6dceb4c50afed42e84f1450dfaba1ae2d0ee7093cd9af45d669129f8e20a971a9031c1dca5e57fd6ad2dc7e74f69943a0c4d9100e9f8a3e6f910a93b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EnrrollmentModule.html" data-type="entity-link" >EnrrollmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EnrrollmentModule-e41409c2cbf21f0c3dbd995fcd811046293154056bd71574cb7d5bb8c2de6d5d9290e0f8a210fb6b94b2220b0a4ea3a5f35a1bc508b15aebba2d8364f5ba4cc8"' : 'data-bs-target="#xs-controllers-links-module-EnrrollmentModule-e41409c2cbf21f0c3dbd995fcd811046293154056bd71574cb7d5bb8c2de6d5d9290e0f8a210fb6b94b2220b0a4ea3a5f35a1bc508b15aebba2d8364f5ba4cc8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EnrrollmentModule-e41409c2cbf21f0c3dbd995fcd811046293154056bd71574cb7d5bb8c2de6d5d9290e0f8a210fb6b94b2220b0a4ea3a5f35a1bc508b15aebba2d8364f5ba4cc8"' :
                                            'id="xs-controllers-links-module-EnrrollmentModule-e41409c2cbf21f0c3dbd995fcd811046293154056bd71574cb7d5bb8c2de6d5d9290e0f8a210fb6b94b2220b0a4ea3a5f35a1bc508b15aebba2d8364f5ba4cc8"' }>
                                            <li class="link">
                                                <a href="controllers/EnrrollmentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnrrollmentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EnrrollmentModule-e41409c2cbf21f0c3dbd995fcd811046293154056bd71574cb7d5bb8c2de6d5d9290e0f8a210fb6b94b2220b0a4ea3a5f35a1bc508b15aebba2d8364f5ba4cc8"' : 'data-bs-target="#xs-injectables-links-module-EnrrollmentModule-e41409c2cbf21f0c3dbd995fcd811046293154056bd71574cb7d5bb8c2de6d5d9290e0f8a210fb6b94b2220b0a4ea3a5f35a1bc508b15aebba2d8364f5ba4cc8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EnrrollmentModule-e41409c2cbf21f0c3dbd995fcd811046293154056bd71574cb7d5bb8c2de6d5d9290e0f8a210fb6b94b2220b0a4ea3a5f35a1bc508b15aebba2d8364f5ba4cc8"' :
                                        'id="xs-injectables-links-module-EnrrollmentModule-e41409c2cbf21f0c3dbd995fcd811046293154056bd71574cb7d5bb8c2de6d5d9290e0f8a210fb6b94b2220b0a4ea3a5f35a1bc508b15aebba2d8364f5ba4cc8"' }>
                                        <li class="link">
                                            <a href="injectables/EnrrollmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnrrollmentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FacultyModule.html" data-type="entity-link" >FacultyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FacultyModule-e88cc669775f62adf7865b5e6ef29c9089f2c9e955c681c7aa612fa7bbd9bd084387a9fae6ab8451c421f2b22c1cdbb19d34de7df7f844ec1708b6f7d6c66dae"' : 'data-bs-target="#xs-controllers-links-module-FacultyModule-e88cc669775f62adf7865b5e6ef29c9089f2c9e955c681c7aa612fa7bbd9bd084387a9fae6ab8451c421f2b22c1cdbb19d34de7df7f844ec1708b6f7d6c66dae"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FacultyModule-e88cc669775f62adf7865b5e6ef29c9089f2c9e955c681c7aa612fa7bbd9bd084387a9fae6ab8451c421f2b22c1cdbb19d34de7df7f844ec1708b6f7d6c66dae"' :
                                            'id="xs-controllers-links-module-FacultyModule-e88cc669775f62adf7865b5e6ef29c9089f2c9e955c681c7aa612fa7bbd9bd084387a9fae6ab8451c421f2b22c1cdbb19d34de7df7f844ec1708b6f7d6c66dae"' }>
                                            <li class="link">
                                                <a href="controllers/FacultyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacultyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FacultyModule-e88cc669775f62adf7865b5e6ef29c9089f2c9e955c681c7aa612fa7bbd9bd084387a9fae6ab8451c421f2b22c1cdbb19d34de7df7f844ec1708b6f7d6c66dae"' : 'data-bs-target="#xs-injectables-links-module-FacultyModule-e88cc669775f62adf7865b5e6ef29c9089f2c9e955c681c7aa612fa7bbd9bd084387a9fae6ab8451c421f2b22c1cdbb19d34de7df7f844ec1708b6f7d6c66dae"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FacultyModule-e88cc669775f62adf7865b5e6ef29c9089f2c9e955c681c7aa612fa7bbd9bd084387a9fae6ab8451c421f2b22c1cdbb19d34de7df7f844ec1708b6f7d6c66dae"' :
                                        'id="xs-injectables-links-module-FacultyModule-e88cc669775f62adf7865b5e6ef29c9089f2c9e955c681c7aa612fa7bbd9bd084387a9fae6ab8451c421f2b22c1cdbb19d34de7df7f844ec1708b6f7d6c66dae"' }>
                                        <li class="link">
                                            <a href="injectables/FacultyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacultyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PeopleModule.html" data-type="entity-link" >PeopleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PeopleModule-e794af87eda070bfca51f150e0999ab5e5aa227ff23890e273f9f67e83d2c14ae083f4cc9d6b48d2103dbd4bf3fbb799c5adbd966ca970f8b6dc09c027390de1"' : 'data-bs-target="#xs-controllers-links-module-PeopleModule-e794af87eda070bfca51f150e0999ab5e5aa227ff23890e273f9f67e83d2c14ae083f4cc9d6b48d2103dbd4bf3fbb799c5adbd966ca970f8b6dc09c027390de1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PeopleModule-e794af87eda070bfca51f150e0999ab5e5aa227ff23890e273f9f67e83d2c14ae083f4cc9d6b48d2103dbd4bf3fbb799c5adbd966ca970f8b6dc09c027390de1"' :
                                            'id="xs-controllers-links-module-PeopleModule-e794af87eda070bfca51f150e0999ab5e5aa227ff23890e273f9f67e83d2c14ae083f4cc9d6b48d2103dbd4bf3fbb799c5adbd966ca970f8b6dc09c027390de1"' }>
                                            <li class="link">
                                                <a href="controllers/PeopleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeopleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PeopleModule-e794af87eda070bfca51f150e0999ab5e5aa227ff23890e273f9f67e83d2c14ae083f4cc9d6b48d2103dbd4bf3fbb799c5adbd966ca970f8b6dc09c027390de1"' : 'data-bs-target="#xs-injectables-links-module-PeopleModule-e794af87eda070bfca51f150e0999ab5e5aa227ff23890e273f9f67e83d2c14ae083f4cc9d6b48d2103dbd4bf3fbb799c5adbd966ca970f8b6dc09c027390de1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PeopleModule-e794af87eda070bfca51f150e0999ab5e5aa227ff23890e273f9f67e83d2c14ae083f4cc9d6b48d2103dbd4bf3fbb799c5adbd966ca970f8b6dc09c027390de1"' :
                                        'id="xs-injectables-links-module-PeopleModule-e794af87eda070bfca51f150e0999ab5e5aa227ff23890e273f9f67e83d2c14ae083f4cc9d6b48d2103dbd4bf3fbb799c5adbd966ca970f8b6dc09c027390de1"' }>
                                        <li class="link">
                                            <a href="injectables/PeopleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeopleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-2c7c566a5e46c125100023f233908bf61dc5e01e51a54c95785d3f9c3a89f5c62255bdc43cc26b5370063aae7d2f451baca0e9d7ed309efce116b39f74cb4296"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-2c7c566a5e46c125100023f233908bf61dc5e01e51a54c95785d3f9c3a89f5c62255bdc43cc26b5370063aae7d2f451baca0e9d7ed309efce116b39f74cb4296"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-2c7c566a5e46c125100023f233908bf61dc5e01e51a54c95785d3f9c3a89f5c62255bdc43cc26b5370063aae7d2f451baca0e9d7ed309efce116b39f74cb4296"' :
                                            'id="xs-controllers-links-module-SchoolModule-2c7c566a5e46c125100023f233908bf61dc5e01e51a54c95785d3f9c3a89f5c62255bdc43cc26b5370063aae7d2f451baca0e9d7ed309efce116b39f74cb4296"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-2c7c566a5e46c125100023f233908bf61dc5e01e51a54c95785d3f9c3a89f5c62255bdc43cc26b5370063aae7d2f451baca0e9d7ed309efce116b39f74cb4296"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-2c7c566a5e46c125100023f233908bf61dc5e01e51a54c95785d3f9c3a89f5c62255bdc43cc26b5370063aae7d2f451baca0e9d7ed309efce116b39f74cb4296"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-2c7c566a5e46c125100023f233908bf61dc5e01e51a54c95785d3f9c3a89f5c62255bdc43cc26b5370063aae7d2f451baca0e9d7ed309efce116b39f74cb4296"' :
                                        'id="xs-injectables-links-module-SchoolModule-2c7c566a5e46c125100023f233908bf61dc5e01e51a54c95785d3f9c3a89f5c62255bdc43cc26b5370063aae7d2f451baca0e9d7ed309efce116b39f74cb4296"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionModule.html" data-type="entity-link" >SectionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SectionModule-c56753d73dad2186320a29751f076cbae9cbe82e22de8e3d6997f3d40c7b370ac2c0817b052e23b02b7d1ca3c255dfa461cceced15b22902e383ec140002d6f2"' : 'data-bs-target="#xs-controllers-links-module-SectionModule-c56753d73dad2186320a29751f076cbae9cbe82e22de8e3d6997f3d40c7b370ac2c0817b052e23b02b7d1ca3c255dfa461cceced15b22902e383ec140002d6f2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SectionModule-c56753d73dad2186320a29751f076cbae9cbe82e22de8e3d6997f3d40c7b370ac2c0817b052e23b02b7d1ca3c255dfa461cceced15b22902e383ec140002d6f2"' :
                                            'id="xs-controllers-links-module-SectionModule-c56753d73dad2186320a29751f076cbae9cbe82e22de8e3d6997f3d40c7b370ac2c0817b052e23b02b7d1ca3c255dfa461cceced15b22902e383ec140002d6f2"' }>
                                            <li class="link">
                                                <a href="controllers/SectionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SectionModule-c56753d73dad2186320a29751f076cbae9cbe82e22de8e3d6997f3d40c7b370ac2c0817b052e23b02b7d1ca3c255dfa461cceced15b22902e383ec140002d6f2"' : 'data-bs-target="#xs-injectables-links-module-SectionModule-c56753d73dad2186320a29751f076cbae9cbe82e22de8e3d6997f3d40c7b370ac2c0817b052e23b02b7d1ca3c255dfa461cceced15b22902e383ec140002d6f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SectionModule-c56753d73dad2186320a29751f076cbae9cbe82e22de8e3d6997f3d40c7b370ac2c0817b052e23b02b7d1ca3c255dfa461cceced15b22902e383ec140002d6f2"' :
                                        'id="xs-injectables-links-module-SectionModule-c56753d73dad2186320a29751f076cbae9cbe82e22de8e3d6997f3d40c7b370ac2c0817b052e23b02b7d1ca3c255dfa461cceced15b22902e383ec140002d6f2"' }>
                                        <li class="link">
                                            <a href="injectables/SectionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Enrrollment.html" data-type="entity-link" >Enrrollment</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Faculty.html" data-type="entity-link" >Faculty</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Profesor.html" data-type="entity-link" >Profesor</a>
                                </li>
                                <li class="link">
                                    <a href="entities/School.html" data-type="entity-link" >School</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Section.html" data-type="entity-link" >Section</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Student.html" data-type="entity-link" >Student</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Base.html" data-type="entity-link" >Base</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseDto.html" data-type="entity-link" >BaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEnrrollmentDto.html" data-type="entity-link" >CreateEnrrollmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFacultyDto.html" data-type="entity-link" >CreateFacultyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfesorDto.html" data-type="entity-link" >CreateProfesorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSectionDto.html" data-type="entity-link" >CreateSectionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateStudentDTO.html" data-type="entity-link" >CreateStudentDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Enrrollment.html" data-type="entity-link" >Enrrollment</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntityBase.html" data-type="entity-link" >EntityBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/Person.html" data-type="entity-link" >Person</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEnrrollmentDto.html" data-type="entity-link" >UpdateEnrrollmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFacultyDto.html" data-type="entity-link" >UpdateFacultyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePersonDto.html" data-type="entity-link" >UpdatePersonDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSectionDto.html" data-type="entity-link" >UpdateSectionDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});