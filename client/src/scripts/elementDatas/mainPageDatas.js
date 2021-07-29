export const mainPageElementsData = `<div class="container main-container">
<div class="row main-upper-row">

    <div class="col-3 main-upper-left-col">
        <div class="user-infos">
            <div><i class="fas fa-user"></i></div>
            <div id="username">
            </div>
        </div>
    </div>

    <div class="col-6 main-upper-middle-col">
        <form class="form-inline" id="serch-box-form">
            <div class="row">
                <div class="col search-box-div">
                    <input id="search-input" type="search" class="form-control" placeholder="Search">
                </div>
                <div class="col-1 search-icon-btn">
                <button id="search-button"><i class="fas fa-search fa-lg"></i></button>
                </div>
            </div>
        </form>
    </div>

    <div class="col main-upper-right-col">
        <div class="col">
            <button type="button" id="new-block-btn"><i class="fas fa-plus fa-2x"></i></button>
        </div>
        <div class="col">
            <label for="new-block-btn">New Block</label>
        </div>
    </div>

</div>

<div class="row main-down-row">
    <div class="col-3 main-left-col">
        <div class="main-left-col-container">
            <div class="tag-container">
                <div class="block-tag">
                    <i class="fas fa-tags"></i>
                    Block Tags
                </div>
            </div>
            <div id="tag-container" class="user-tag-container">
            </div>
        </div>
    </div>

    <div class="col main-right-col">
        <div class="main-right-col-container">
            <div id="block-data-container">
                <div class="tag-container">
                    <div class="block-tag">
                        <i class="fas fa-cube"></i>
                        Blocks
                    </div>
                </div>
                <div id="blocks-container"></div>
            </div>
        </div>
    </div>
</div>`;

export const blockTagsElementsData = `<div class="user-tag-single-container">
<div class="user-tag" id="left-block-tag"></div></div>`;

export const blockElementsData = `<div class="block-container">
<div class="row single-block-row user-block">
    <div class="col block-title-col flex-center padding-7px">
        <div class="single-block-title" id="single-block-title"> 
        
        </div>
    </div>
    <div class="col-3 block-tag-col flex-center padding-7px">
        <div class="single-block-tag" id="right-block-tag">
        </div>
    </div>
</div>
</div>`;

export const blockCreateElementData = `<div class="padding-7px"> 
<div class="block-title-container">
<label for="block-title-input" class="title-label">Block Title</label>
<input type="text" id="block-title-input" class="form-control">
</div>

<div class="block-tag-container">
<label for="block-tag-input" class="tag-data-labels">Block Tag</label>
<input type="text" id="block-tag-input" class="form-control">
</div>

<div class="block-data-container">
<label for="block-data-textarea" class="tag-data-labels">Block Data</label>
<code id="block-data-code">
<textarea name="" id="block-data-textarea" cols="30" rows="15"
    class="form-control"></textarea>
</code>
</div>

<div class="block-buttons">
<button class="btn" id="save-button">Save</button>
<button class="btn" id="cancel-button">Cancel</button>
</div>
</div>`;

export const blockUpdateElementData = `<div class="padding-7px"> 
<div class="block-title-container">
<label for="block-title-input" class="title-label">Block Title</label>
<input type="text" id="block-title-input" class="form-control">
</div>

<div class="block-tag-container">
<label for="block-tag-input" class="tag-data-labels">Block Tag</label>
<input type="text" id="block-tag-input" class="form-control">
</div>

<div class="block-data-container">
<label for="block-data-textarea" class="tag-data-labels">Block Data</label>
<code id="block-data-code">
<textarea name="" id="block-data-textarea" cols="30" rows="15"
    class="form-control"></textarea>
</code>
</div>

<div class="block-buttons">
    <div class="row"> 
        <div class="col">
            <button class="btn" id="save-button">Save</button>
            <button class="btn" id="cancel-button">Cancel</button>
        </div>
        <div class="col-1">
            <button class="btn" id="delete-button"><i class="fas fa-trash-alt fa-lg"></i></button>
        </div>
    </div>
</div>
</div>`;
