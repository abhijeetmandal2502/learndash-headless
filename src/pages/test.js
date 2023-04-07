import React from 'react'

const Test = () => {
    return (
        <>


            {/* <div class="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
             
                <div class="drawer-side">
                    
                    <label for="my-drawer  my-drawer-4" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-4" class="drawer-overlay"></label>
                    <div class="drawer">
                        <div>
                            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                            <div class="drawer-content">

                                <label for="my-drawer" class="btn btn-primary drawer-button">Open left</label>
                            </div>
                            <div class="drawer-side">
                                <label for="my-drawer  my-drawer-4" class="drawer-overlay"></label>
                                <ul class="menu p-4 w-80 bg-base-100 text-base-content">

                                    <li><a>Sidebar Item 1</a></li>
                                    <li><a>Sidebar Item 2</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                <div className="bg-black drawer-content">

                    <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
                    <ul class="menu p-4 w-80  text-base-content">

                        <li><a>Sidebar first</a></li>
                        <li><a>Sidebar first</a></li>
                    </ul>

                </div>

                <div class="drawer-side duration-500">
                    <label for="my-drawer-4" class="drawer-overlay"></label>
                    <div className='w-full h-full bg-white'>
                        <label for="my-drawer-4" class="drawer-button btn btn-primary float-right">Open drawer</label>

                        <ul class="menu p-4 w-80  text-base-content">

                            <li><a>Sidebar second 1</a></li>
                            <li><a>Sidebar second 2</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Test