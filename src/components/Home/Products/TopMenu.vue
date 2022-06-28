<template>
    <div class="top-menu">
        <div class="cm-e-menu text-end d-none">
            <ul>
                <li class="topmenu">
                    <a>file</a>
                    <ul class="submenu">
                        <li><a>browse</a></li>
                        <li><a>new file</a></li>
                        <li><a>new folder</a></li>
                        <li class="divider"></li>
                        <li><a>save</a></li>
                        <li><a>save as</a></li>
                        <li><a>save all</a></li>
                        <li class="divider"></li>
                        <li><a>rename</a></li>
                        <li><a>delete</a></li>
                        <li class="divider"></li>
                        <li>
                            <a>close</a>
                            <ul class="submenu">
                                <li><a>current file</a></li>
                                <li class="divider"></li>
                                <li><a>files to the right</a></li>
                                <li><a>files to the left</a></li>
                                <li class="divider"></li>
                                <li>
                                    <a>all open files</a>
                                    <ul class="submenu">
                                        <li><a>current file</a></li>
                                        <li class="divider"></li>
                                        <li><a>files to the right</a></li>
                                        <li><a>files to the left</a></li>
                                        <li class="divider"></li>
                                        <li>
                                            <a>all open files</a>
                                            <ul class="submenu">
                                                <li><a>current file</a></li>
                                                <li class="divider"></li>
                                                <li><a>files to the right</a></li>
                                                <li><a>files to the left</a></li>
                                                <li class="divider"></li>
                                                <li><a>all open files</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>download</a>
                            <ul class="submenu">
                                <li><a>all files</a></li>
                                <li><a>current file</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="topmenu">
                    <a>edit</a>
                    <ul class="submenu">
                        <li><a>undo</a></li>
                        <li><a>redo</a></li>
                        <li class="divider"></li>
                        <li><a>copy</a></li>
                        <li><a>cut</a></li>
                        <li><a>paste</a></li>
                        <li class="divider"></li>
                        <li><a>select all</a></li>
                        <li><a>select line</a></li>
                    </ul>
                </li>
                <li class="topmenu">
                    <a>view</a>
                    <ul class="submenu">
                        <li><a>hide tabs</a></li>
                        <li><a>hide menu</a></li>
                        <li class="divider"></li>
                        <li><a>wordwrap</a></li>
                        <li><a>line numbers</a></li>
                        <li><a>fullscreen</a></li>
                        <li class="divider"></li>
                        <li><a>highlight active line</a></li>
                        <li>
                            <a>sidebar</a>
                            <ul class="submenu">
                                <li><a>hide sidebar</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="topmenu"><a>find</a></li>
                <li class="topmenu">
                    <a>help</a>
                    <ul class="submenu">
                        <li><a>support</a></li>
                        <li><a>documentation</a></li>
                        <li class="divider"></li>
                        <li><a>bug report</a></li>
                    </ul>
                </li>
                <li class="topmenu">
                    <a>settings</a>
                    <ul class="submenu">
                        <li>
                            <a>font</a>
                            <ul class="submenu">
                                <li><a>larger</a></li>
                                <li><a>smaller</a></li>
                                <li class="divider"></li>
                                <li><a>default</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>indentation</a>
                            <ul class="submenu">
                                <li><a>+1 space</a></li>
                                <li><a>-1 space</a></li>
                                <li class="divider"></li>
                                <li><a>default</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopMenu'
    }
</script>

<style scoped>
ul.submenu {
    text-align: start;
}
.cm-e-menu {
	width: 93%;
    margin-left: 7%;
    background-color: #222;
    position: relative;
    z-index: 1000;
    color: #fff;
    font-weight: 200;
    box-shadow: 0 0 10px black;
	}
.cm-e-menu ul {
	margin: 0; padding: 0;
}
.cm-e-menu li {
	position: relative;
	white-space: nowrap;
	cursor: pointer;
	text-transform: capitalize !important;
	list-style: none;

	-webkit-transition: background-color ease-in 300ms;
	-moz-transition: background-color ease-in 300ms;
	-ms-transition: background-color ease-in 300ms;
	-o-transition: background-color ease-in 300ms;
	transition: background-color ease-in 300ms;
}
.cm-e-menu li:hover {
	background-color: #3d3d3d;
	text-shadow: 0 10px 10px #222;
}
.cm-e-menu ul li.topmenu {
	display: inline-table;
	padding: .3em 1em;
}
.cm-e-menu .topmenu ul {
	display:none;
	position: absolute;
	background-color: #222;
}
.cm-e-menu li:hover > ul {
	display: table;
}
.cm-e-menu ul.submenu {
	top: 100%; left: 0;
	padding-top: .5em;
	padding-bottom: .5em;	
	box-shadow: 0 0 10px black;
}
.cm-e-menu ul.submenu .submenu {
	top: -.5em; left: 100%;
	font-size: 1em
}
.cm-e-menu ul.submenu li {
	padding: .2em 1.5em;
	font-size: .9rem;
}
.cm-e-menu li.divider {
	padding: 0;
	border-top: 1px solid #343434;
	margin: .5rem auto .3rem;
	cursor: default;
}
.cm-e-menu li.divider:hover {
	background-color: transparent;
}
</style>