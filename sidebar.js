// sidebar.js
// Полная структура сайдбара документации Cavalry (русская локализация)
// Меняешь здесь — обновляется на всех страницах.

(function () 
{
    const inPages = window.location.pathname.includes('/pages/');
    const prefix = inPages ? '../' : '';

    // ============================================================
    //  ДАННЫЕ САЙДБАРА
    // ============================================================
    const navData = [
        // ============================================================
        //  ДОБРО ПОЖАЛОВАТЬ
        // ============================================================
        {
            title: "Документация",
            href: `${prefix}index.html`,
            children: [
                {title: "О программе", href: `${prefix}pages/introduction.html`},
                { title: "Начало работы", children: [
                    { title: "Системные требования", href: `${prefix}pages/requirements.html` },
                    { title: "Скачивание и установка", href: `${prefix}pages/installation.html` },
                    { title: "Быстрый старт", href: `${prefix}pages/quick-start.html` },
                    { title: "Файлы примеров", href: `${prefix}pages/example-files.html` },
                ]},
                { title: "Ключевые понятия", children: [
                    { title: "Слои", href: `${prefix}pages/layers.html` },
                    { title: "Соединения", href: `${prefix}pages/connections.html` },
                    { title: "Контекст", href: `${prefix}pages/context.html` },
                ]},
            ]
        },

        // ============================================================
        //  ИНТЕРФЕЙС
        // ============================================================
        {
            title: "Интерфейс программы",
            children: [
            { title: "Главное окно", href: `${prefix}pages/logs.html` },
                { title: "Меню", children: [
                    { title: "File", href: `${prefix}pages/menu-file.html` },
                    { title: "Edit", href: `${prefix}pages/menu-edit.html` },
                    { title: "View", href: `${prefix}pages/menu-view.html` },
                    { title: "Composition", href: `${prefix}pages/menu-composition.html` },
                    { title: "Create", href: `${prefix}pages/menu-create.html` },
                    { title: "Animation", href: `${prefix}pages/menu-animation.html` },
                    { title: "Shape", href: `${prefix}pages/menu-shape.html` },
                    { title: "Tool", children: [
                        { title: "Tool Menu Items", href: `${prefix}pages/tool-menu-items.html` },
                        { title: "Arc", href: `${prefix}pages/tool-arc.html` },
                        { title: "Arrow ", href: `${prefix}pages/tool-arrow.html` },
                        { title: "Camera", href: `${prefix}pages/tool-camera.html` },
                        { title: "Capsule", href: `${prefix}pages/tool-capsule.html` },
                        { title: "Cogwheel", href: `${prefix}pages/tool-cogwheel.html` },
                        { title: "Edit Shape", href: `${prefix}pages/tool-edit-shape.html` },
                        { title: "Ellipse", href: `${prefix}pages/tool-ellipse.html` },
                        { title: "Line", href: `${prefix}pages/tool-line.html` },
                        { title: "Mesh", href: `${prefix}pages/tool-mesh.html` },
                        { title: "Pen", href: `${prefix}pages/tool-pen.html` },
                        { title: "Pencil", href: `${prefix}pages/tool-pencil.html` },
                        { title: "Pivot", href: `${prefix}pages/tool-pivot.html` },
                        { title: "Polygon", href: `${prefix}pages/tool-polygon.html` },
                        { title: "Rectangle", href: `${prefix}pages/tool-rectangle.html` },
                        { title: "Select", href: `${prefix}pages/tool-select.html` },
                        { title: "Star", href: `${prefix}pages/tool-star.html` },
                        { title: "Super Ellipse", href: `${prefix}pages/tool-super-ellipse.html` },
                        { title: "Super Shape", href: `${prefix}pages/tool-super-shape.html` },
                        { title: "Text", href: `${prefix}pages/tool-text.html` },
                        { title: "Tracking", href: `${prefix}pages/tool-tracking.html` },
                    ]},
                    { title: "Dynamics", href: `${prefix}pages/menu-dynamics.html` },
                    { title: "Window", children: [
                        { title: "Window Menu Items", href: `${prefix}pages/window-menu-items.html` },
                        
                        { title: "Add Layers", href: `${prefix}pages/window-add-layers.html` },
                        { title: "Align Window", href: `${prefix}pages/window-align.html` },
                        { title: "Animation Utilities", href: `${prefix}pages/window-animation-utilities.html` },
                        { title: "Assets Window", href: `${prefix}pages/window-assets.html`, children: [
                            { title: "Assets Window", href: `${prefix}pages/window-assets.html` },
                            { title: "Google Sheets Asset", href: `${prefix}pages/window-assets-google-sheets.html` },
                            { title: "Image Sequences", href: `${prefix}pages/window-assets-image-sequences.html` },
                            { title: "Project Settings", href: `${prefix}pages/window-assets-project-settings.html` },
                            { title: "Audio Smart Folder", href: `${prefix}pages/window-assets-audio-smart-folder.html` },
                            { title: "Image Smart Folder", href: `${prefix}pages/window-assets-image-smart-folder.html` },
                            { title: "Referencing", href: `${prefix}pages/window-assets-referencing.html` },
                            
                        ]},
                        
                        { title: "Attribute Editor", href: `${prefix}pages/window-attribute-editor.html`, children: [
                            { title: "Main Window", href: `${prefix}pages/window-attribute-editor.html` },
                            { title: "Widgets", children: [
                                { title: "Gradient", href: `${prefix}pages/window-attr-widget-gradient.html` },
                                { title: "Graph Attribute", href: `${prefix}pages/window-attr-widget-graph.html` },
                            ]},
                            { title: "Control Rows", children: [
                                { title: "Control Rows - Types", href: `${prefix}pages/window-attr-control-rows-types.html` },
                                { title: "Control Rows - Interaction", href: `${prefix}pages/window-attr-control-rows-interaction.html` },
                            ]},
                            
                        ]},
                        
                        { title: "Audio Monitor", href: `${prefix}pages/window-assets-audio-monitor.html` },
                        { title: "Color window", children: [
                                { title: "Main Window", href: `${prefix}pages/window-color-main.html` },
                                { title: "Palettes", href: `${prefix}pages/window-color-palettes.html` },
                        ]},
                        { title: "Control Centre", href: `${prefix}pages/window-control-centre.html` },
                        { title: "Dependency Graph", href: `${prefix}pages/window-dependency-graph.html` },
                        { title: "Glyph Browser", href: `${prefix}pages/window-glyph-browser.html` },
                        { title: "JavaScript Console", href: `${prefix}pages/window-js-console.html` },
                        { title: "JavaScript Editor", href: `${prefix}pages/window-js-editor.html` },
                        { title: "Mesh Explorer", href: `${prefix}pages/window-mesh-explorer.html` },
                        { title: "Message Bar", href: `${prefix}pages/window-message-bar.html` },
                        { title: "Preferences", href: `${prefix}pages/window-preferences.html` },
                        { title: "Render Manager", href: `${prefix}pages/window-render-manager.html`, children: [
                            { title: "Main Window", href: `${prefix}pages/window-render-manager.html` },
                            { title: "Lottie Export", href: `${prefix}pages/window-render-lottie.html` },
                            { title: "Dynamic Rendering", href: `${prefix}pages/window-render-dynamic.html` },
                            { title: "Render Tokens", href: `${prefix}pages/window-render-tokens.html` },
                        ]},
                        { title: "Scene Statistics", href: `${prefix}pages/window-scene-statistics.html` },
                        { title: "Scene Window", href: `${prefix}pages/window-scene.html`, children: [
                            { title: "Scene Window", href: `${prefix}pages/window-scene.html` },
                            { title: "Scene Tree", children: [
                                { title: "Scene Tree", href: `${prefix}pages/window-scene-tree.html` },
                                { title: "Composition Settings", href: `${prefix}pages/window-scene-composition-settings.html` },
                            ]},
                            { title: "Timeline", href: `${prefix}pages/window-timeline.html` },
                            { title: "Time Editor", href: `${prefix}pages/window-time-editor.html` },
                            { title: "Graph Editor", href: `${prefix}pages/window-graph-editor.html` },
                            { title: "Keyframe Layers", href: `${prefix}pages/window-keyframe-layers.html` },
                            { title: "Time Markers", href: `${prefix}pages/window-time-markers.html` },
                        ]},
                        { title: "Shelf", href: `${prefix}pages/window-shelf.html` },
                        
                        { title: "Tool Settings", href: `${prefix}pages/window-tool-settings.html` },
                        { title: "Toolbar", href: `${prefix}pages/window-toolbar.html` },
                        { title: "Shortcut Manager", href: `${prefix}pages/window-shortcut-manager.html` },
                        { title: "Upload Preset Manager", href: `${prefix}pages/window-upload-preset-manager.html` },
                        { title: "Viewport", children: [
                            { title: "Viewport", href: `${prefix}pages/window-viewport.html` },
                            { title: "Motion Paths", href: `${prefix}pages/window-viewport-motion-paths.html` },
                            { title: "Playback Controls", href: `${prefix}pages/window-viewport-playback.html` },
                            { title: "Rulers and Guides", href: `${prefix}pages/window-viewport-rulers.html` },
                        ]},
                        { title: "General", children: [
                            { title: "Command Search", href: `${prefix}pages/window-general-command-search.html` },
                            { title: "Tag Window", href: `${prefix}pages/window-tag.html` },
                            { title: "Workspaces", href: `${prefix}pages/window-general-workspaces.html` },
                        ]},
                    ]},
                    { title: "Scripts", href: `${prefix}pages/menu-scripts.html` },
                    { title: "Help", href: `${prefix}pages/menu-help.html` },
                ]},
                { title: "Общее", children: [
                    { title: "Управление цветом", href: `${prefix}pages/general-color-management.html` },
                    { title: "Заготовки", href: `${prefix}pages/general-presets.html` },
                ]},
            ]
        },

        // ============================================================
        //  СЛОИ
        // ============================================================
        {
            title: "Слои",
            children: [
                // ===== ФОРМЫ =====
                { title: "Формы", children: [
                    { title: "Shapes", href: `${prefix}pages/shapes.html` },
                    { title: "Common Attributes (Shapes)", href: `${prefix}pages/shapes-common-attributes.html` },
                    { title: "Background Shape", href: `${prefix}pages/shapes-background.html` },
                    { title: "Basic Line", children: [
                        { title: "Introduction", href: `${prefix}pages/basic-line-intro.html` },
                        { title: "Bézier", href: `${prefix}pages/basic-line-bezier.html` },
                        { title: "Line", href: `${prefix}pages/basic-line-line.html` },
                        { title: "Spiral", href: `${prefix}pages/basic-line-spiral.html` },
                    ]},
                    { title: "Basic Shape", children: [
                        { title: "Basic Shape", href: `${prefix}pages/basic-shape.html` },
                        { title: "Arc", href: `${prefix}pages/basic-shape-arc.html` },
                        { title: "Arrow", href: `${prefix}pages/basic-shape-arrow.html` },
                        { title: "Capsule", href: `${prefix}pages/basic-shape-capsule.html` },
                        { title: "Cogwheel", href: `${prefix}pages/basic-shape-cogwheel.html` },
                        { title: "Ellipse", href: `${prefix}pages/basic-shape-ellipse.html` },
                        { title: "Polygon", href: `${prefix}pages/basic-shape-polygon.html` },
                        { title: "Rectangle", href: `${prefix}pages/basic-shape-rectangle.html` },
                        { title: "Ring", href: `${prefix}pages/basic-shape-ring.html` },
                        { title: "Star", href: `${prefix}pages/basic-shape-star.html` },
                        { title: "Super Ellipse", href: `${prefix}pages/basic-shape-super-ellipse.html` },
                        { title: "Super Shape", href: `${prefix}pages/basic-shape-super-shape.html` },
                    ]},
                    { title: "Cel Animation Shape", href: `${prefix}pages/cel-animation-shape.html` },
                    { title: "Component", href: `${prefix}pages/component.html` },
                    { title: "Connect Shape", href: `${prefix}pages/connect-shape.html` },
                    { title: "Convex Hull", href: `${prefix}pages/convex-hull.html` },
                    { title: "Corner Pin", href: `${prefix}pages/corner-pin.html` },
                    { title: "Custom Shape", href: `${prefix}pages/custom-shape.html` },
                    { title: "Duplicator", href: `${prefix}pages/duplicator.html` },
                    { title: "Editable Shape", href: `${prefix}pages/editable-shape.html` },
                    { title: "Extract Sub-Meshes", href: `${prefix}pages/extract-sub-meshes.html` },
                    { title: "Extrude", href: `${prefix}pages/extrude.html` },
                    { title: "Footage Shape", href: `${prefix}pages/footage-shape.html` },
                    { title: "Forge Dynamics", children: [
                        { title: "Forge Dynamics Shape", href: `${prefix}pages/forge-dynamics-shape.html` },
                        { title: "Constraints", href: `${prefix}pages/forge-dynamics-constraints.html` },
                        { title: "Collision Events", href: `${prefix}pages/forge-dynamics-collision-events.html` },
                        { title: "Fields", href: `${prefix}pages/forge-dynamics-fields.html` },
                    ]},
                    { title: "Layouts", children: [
                        { title: "Layouts", href: `${prefix}pages/layouts.html` },
                        { title: "Layout Group", href: `${prefix}pages/layouts-group.html` },
                        { title: "Grid Layout Group", href: `${prefix}pages/layouts-grid-group.html` },
                        { title: "Grid Layout Row", href: `${prefix}pages/layouts-grid-row.html` },
                    ]},
                    { title: "Group", href: `${prefix}pages/group.html` },
                    { title: "Image to Shapes", href: `${prefix}pages/image-to-shapes.html` },
                    { title: "Isolines Shape", href: `${prefix}pages/isolines-shape.html` },
                    { title: "JavaScript Shape", href: `${prefix}pages/javascript-shape.html` },
                    { title: "Merge", href: `${prefix}pages/merge.html` },
                    { title: "Mesh Shape", href: `${prefix}pages/mesh-shape.html` },
                    { title: "Outline", href: `${prefix}pages/outline.html` },
                    { title: "Points to Path", href: `${prefix}pages/points-to-path.html` },
                    { title: "Quad Tree Shape", href: `${prefix}pages/quad-tree-shape.html` },
                    { title: "Ray", href: `${prefix}pages/ray.html` },
                    { title: "Rectangle Pattern", href: `${prefix}pages/rectangle-pattern.html` },
                    { title: "Segment Path", href: `${prefix}pages/segment-path.html` },
                    { title: "Shortest Path", href: `${prefix}pages/shortest-path.html` },
                    { title: "Spacer", href: `${prefix}pages/spacer.html` },
                    { title: "SVG", href: `${prefix}pages/svg.html` },
                    { title: "Text Shape", href: `${prefix}pages/text-shape.html` },
                    
                    
                    { title: "Composition", children: [
                        { title: "Composition", href: `${prefix}pages/composition.html` },
                        { title: "Pre-Comp Overrides", href: `${prefix}pages/composition-precomp-overrides.html` },
                    ]},
                    { title: "Экспериментальные", children: [
                        { title: "Particle Shape", href: `${prefix}pages/particle-shape.html` },
                        { title: "Sub-Mesh Bounding Box", href: `${prefix}pages/sub-mesh-bounding-box.html` },
                        { title: "Trails", href: `${prefix}pages/trails.html` },
                    ]},
                ]},

                // ===== ПОВЕДЕНИЯ =====
                { title: "Поведения", children: [
                    { title: "Behaviours", href: `${prefix}pages/behaviours.html` },
                    { title: "Common Attributes (Behaviours)", href: `${prefix}pages/behaviours-common-attributes.html` },
                    { title: "3D Matrix", href: `${prefix}pages/behaviour-3d-matrix.html` },
                    { title: "Add Divisions", href: `${prefix}pages/behaviour-add-divisions.html` },
                    { title: "Align", href: `${prefix}pages/behaviour-align.html` },
                    { title: "Alpha Material Override", href: `${prefix}pages/behaviour-alpha-material-override.html` },
                    { title: "Apply Distribution", href: `${prefix}pages/behaviour-apply-distribution.html` },
                    { title: "Apply Layout", children: [
                        { title: "Apply Layout", href: `${prefix}pages/behaviour-apply-layout.html` },
                        { title: "Grid Layout", href: `${prefix}pages/behaviour-apply-layout-grid.html` },
                        { title: "Horizontal Layout", href: `${prefix}pages/behaviour-apply-layout-horizontal.html` },
                        { title: "Vertical Layout", href: `${prefix}pages/behaviour-apply-layout-vertical.html` },
                    ]},
                    { title: "Area Range", href: `${prefix}pages/behaviour-area-range.html` },
                    { title: "Auto-Animate", href: `${prefix}pages/behaviour-auto-animate.html` },
                    { title: "Auto-Crop", href: `${prefix}pages/behaviour-auto-crop.html` },
                    { title: "Behaviour Mixer", href: `${prefix}pages/behaviour-mixer.html` },
                    { title: "Bend Deformer", href: `${prefix}pages/behaviour-bend-deformer.html` },
                    { title: "Bevel", href: `${prefix}pages/behaviour-bevel.html` },
                    { title: "Blend Shape", href: `${prefix}pages/behaviour-blend-shape.html` },
                    { title: "Blend Sub-Mesh Positions", href: `${prefix}pages/behaviour-blend-sub-mesh-positions.html` },
                    { title: "Boolean", href: `${prefix}pages/behaviour-boolean.html` },
                    { title: "Chop Path", href: `${prefix}pages/behaviour-chop-path.html` },
                    { title: "Clean Up", href: `${prefix}pages/behaviour-clean-up.html` },
                    { title: "Color Blend", href: `${prefix}pages/behaviour-color-blend.html` },
                    { title: "Color Material Override", href: `${prefix}pages/behaviour-color-material-override.html` },
                    { title: "Contours to Sub-Meshes", href: `${prefix}pages/behaviour-contours-to-sub-meshes.html` },
                    { title: "Curves to Lines", href: `${prefix}pages/behaviour-curves-to-lines.html` },
                    { title: "Distance", href: `${prefix}pages/behaviour-distance.html` },
                    { title: "Extend Open Paths", href: `${prefix}pages/behaviour-extend-open-paths.html` },
                    { title: "Fill Rule", href: `${prefix}pages/behaviour-fill-rule.html` },
                    { title: "Flare", href: `${prefix}pages/behaviour-flare.html` },
                    { title: "Flatten Shape Layers", href: `${prefix}pages/behaviour-flatten-shape-layers.html` },
                    { title: "Four Point Warp", href: `${prefix}pages/behaviour-four-point-warp.html` },
                    { title: "Frame", href: `${prefix}pages/behaviour-frame.html` },
                    { title: "Get Vector", href: `${prefix}pages/behaviour-get-vector.html` },
                    { title: "HSV Material Override", href: `${prefix}pages/behaviour-hsv-material-override.html` },
                    { title: "Is Within", href: `${prefix}pages/behaviour-is-within.html` },
                    { title: "JavaScript Deformer", href: `${prefix}pages/behaviour-js-deformer.html` },
                    { title: "Knot", href: `${prefix}pages/behaviour-knot.html` },
                    { title: "Lattice Deformer", href: `${prefix}pages/behaviour-lattice-deformer.html` },
                    { title: "Look At", href: `${prefix}pages/behaviour-look-at.html` },
                    { title: "Manipulator", href: `${prefix}pages/behaviour-manipulator.html` },
                    { title: "Material Sampler", href: `${prefix}pages/behaviour-material-sampler.html` },
                    { title: "Mesh Solver", href: `${prefix}pages/behaviour-mesh-solver.html` },
                    { title: "Modulate", href: `${prefix}pages/behaviour-modulate.html` },
                    { title: "Morph", href: `${prefix}pages/behaviour-morph.html` },
                    { title: "Motion Stretch", href: `${prefix}pages/behaviour-motion-stretch.html` },
                    { title: "Noise", href: `${prefix}pages/behaviour-noise.html` },
                    { title: "Number Range", href: `${prefix}pages/behaviour-number-range.html` },
                    { title: "Number Range to Color", href: `${prefix}pages/behaviour-number-range-to-color.html` },
                    { title: "Oscillator", href: `${prefix}pages/behaviour-oscillator.html` },
                    { title: "Path Average", href: `${prefix}pages/behaviour-path-average.html` },
                    { title: "Path Offset", href: `${prefix}pages/behaviour-path-offset.html` },
                    { title: "Path Relax", href: `${prefix}pages/behaviour-path-relax.html` },
                    { title: "Pathfinder", href: `${prefix}pages/behaviour-pathfinder.html` },
                    { title: "Pinch", href: `${prefix}pages/behaviour-pinch.html` },
                    { title: "Position Blend", href: `${prefix}pages/behaviour-position-blend.html` },
                    { title: "Push Along Vector", href: `${prefix}pages/behaviour-push-along-vector.html` },
                    { title: "Random", href: `${prefix}pages/behaviour-random.html` },
                    { title: "Resample Path", href: `${prefix}pages/behaviour-resample-path.html` },
                    { title: "Reverse Path", href: `${prefix}pages/behaviour-reverse-path.html` },
                    { title: "Round", href: `${prefix}pages/behaviour-round.html` },
                    { title: "Rubber Hose Limb", href: `${prefix}pages/behaviour-rubber-hose-limb.html` },
                    { title: "Skew", href: `${prefix}pages/behaviour-skew.html` },
                    { title: "Sound", href: `${prefix}pages/behaviour-sound.html` },
                    { title: "Spring", href: `${prefix}pages/behaviour-spring.html` },
                    { title: "Squash and Stretch", href: `${prefix}pages/behaviour-squash-and-stretch.html` },
                    { title: "Stagger", href: `${prefix}pages/behaviour-stagger.html` },
                    { title: "Stitches", href: `${prefix}pages/behaviour-stitches.html` },
                    { title: "Sub-Mesh", href: `${prefix}pages/behaviour-sub-mesh.html` },
                    { title: "Subdivide", href: `${prefix}pages/behaviour-subdivide.html` },
                    { title: "Swap Color Override", href: `${prefix}pages/behaviour-swap-color-override.html` },
                    { title: "Travel Deformer", href: `${prefix}pages/behaviour-travel-deformer.html` },
                    { title: "Value", href: `${prefix}pages/behaviour-value.html` },
                    { title: "Value2", href: `${prefix}pages/behaviour-value2.html` },
                    { title: "Value3", href: `${prefix}pages/behaviour-value3.html` },
                    { title: "Value Blend", href: `${prefix}pages/behaviour-value-blend.html` },
                    { title: "Value2 Blend", href: `${prefix}pages/behaviour-value2-blend.html` },
                    { title: "Value3 Blend", href: `${prefix}pages/behaviour-value3-blend.html` },
                    { title: "Value Solver", href: `${prefix}pages/behaviour-value-solver.html` },
                    { title: "Value2 Solver", href: `${prefix}pages/behaviour-value2-solver.html` },
                    { title: "Visibility Sequence", href: `${prefix}pages/behaviour-visibility-sequence.html` },
                    { title: "Voxelize", href: `${prefix}pages/behaviour-voxelize.html` },
                    { title: "Wave", href: `${prefix}pages/behaviour-wave.html` },
                ]},

                // ===== УТИЛИТЫ =====
                { title: "Утилиты", children: [
                    { title: "Utilities", href: `${prefix}pages/utilities.html` },
                    { title: "Accumulator", href: `${prefix}pages/util-accumulator.html` },
                    { title: "Animation Control", href: `${prefix}pages/util-animation-control.html` },
                    { title: "Apply Character Spacing", href: `${prefix}pages/util-apply-character-spacing.html` },
                    { title: "Apply Font Size", href: `${prefix}pages/util-apply-font-size.html` },
                    { title: "Apply Font Style", href: `${prefix}pages/util-apply-font-style.html` },
                    { title: "Apply OpenType", href: `${prefix}pages/util-apply-opentype.html` },
                    { title: "Apply Text Material", href: `${prefix}pages/util-apply-text-material.html` },
                    { title: "Apply Typeface", href: `${prefix}pages/util-apply-typeface.html` },
                    { title: "Asset Array", href: `${prefix}pages/util-asset-array.html` },
                    { title: "Asset from Smart Folder", href: `${prefix}pages/util-asset-from-smart-folder.html` },
                    { title: "Attractor Field", href: `${prefix}pages/util-attractor-field.html` },
                    { title: "Body Settings Collision Event", href: `${prefix}pages/util-body-settings-collision-event.html` },
                    { title: "Bounding Box", href: `${prefix}pages/util-bounding-box.html` },
                    { title: "Bounding Box Constraint", href: `${prefix}pages/util-bounding-box-constraint.html` },
                    { title: "Bridge Constraint", href: `${prefix}pages/util-bridge-constraint.html` },
                    { title: "Buoyancy Field", href: `${prefix}pages/util-buoyancy-field.html` },
                    { title: "Camera Guide", href: `${prefix}pages/util-camera-guide.html` },
                    { title: "Camera", href: `${prefix}pages/util-camera.html` },
                    { title: "Color Array", href: `${prefix}pages/util-color-array.html` },
                    { title: "Color Collision Event", href: `${prefix}pages/util-color-collision-event.html` },
                    { title: "Color Info", href: `${prefix}pages/util-color-info.html` },
                    { title: "Composition Constraint", href: `${prefix}pages/util-composition-constraint.html` },
                    { title: "Comparison", href: `${prefix}pages/util-comparison.html` },
                    { title: "Component Constraint", href: `${prefix}pages/util-component-constraint.html` },
                    { title: "Contrasting Color", href: `${prefix}pages/util-contrasting-color.html` },
                    { title: "Count Sub-Meshes", href: `${prefix}pages/util-count-sub-meshes.html` },
                    { title: "Data Modifier", href: `${prefix}pages/util-data-modifier.html` },
                    { title: "Direction Field", href: `${prefix}pages/util-direction-field.html` },
                    { title: "Distance Constraint", href: `${prefix}pages/util-distance-constraint.html` },
                    { title: "Distribution Emitter", href: `${prefix}pages/util-distribution-emitter.html` },
                    { title: "Drag Field", href: `${prefix}pages/util-drag-field.html` },
                    { title: "Falloff", href: `${prefix}pages/util-falloff.html` },
                    { title: "Fill", href: `${prefix}pages/util-fill.html` },
                    { title: "Flow Field Modifier", href: `${prefix}pages/util-flow-field-modifier.html` },
                    { title: "Force Modifier", href: `${prefix}pages/util-force-modifier.html` },
                    { title: "Get Name", href: `${prefix}pages/util-get-name.html` },
                    { title: "Get Sub-Mesh Transform", href: `${prefix}pages/util-get-sub-mesh-transform.html` },
                    { title: "HSV Color", href: `${prefix}pages/util-hsv-color.html` },
                    { title: "If Else", href: `${prefix}pages/util-if-else.html` },
                    { title: "Index Context", href: `${prefix}pages/util-index-context.html` },
                    { title: "Goal Modifier", href: `${prefix}pages/util-goal-modifier.html` },
                    { title: "Image Modifier", href: `${prefix}pages/util-image-modifier.html` },
                    { title: "Image Sampler", href: `${prefix}pages/util-image-sampler.html` },
                    { title: "Impulse Collision Event", href: `${prefix}pages/util-impulse-collision-event.html` },
                    { title: "Index to Color", href: `${prefix}pages/util-index-to-color.html` },
                    { title: "JavaScript Emitter", href: `${prefix}pages/util-js-emitter.html` },
                    { title: "JavaScript Modifier", href: `${prefix}pages/util-js-modifier.html` },
                    { title: "JavaScript Utility", href: `${prefix}pages/util-js-utility.html` },
                    { title: "Jsmath", href: `${prefix}pages/util-jsmath.html` },
                    { title: "Layer Seed", href: `${prefix}pages/util-layer-seed.html` },
                    { title: "Lattice Controller", href: `${prefix}pages/util-lattice-controller.html` },
                    { title: "Length Context", href: `${prefix}pages/util-length-context.html` },
                    { title: "Local Time", href: `${prefix}pages/util-local-time.html` },
                    { title: "Logic", href: `${prefix}pages/util-logic.html` },
                    { title: "Magnetic Modifier", href: `${prefix}pages/util-magnetic-modifier.html` },
                    { title: "Math", href: `${prefix}pages/util-math.html` },
                    { title: "Math2", href: `${prefix}pages/util-math2.html` },
                    { title: "Math3", href: `${prefix}pages/util-math3.html` },
                    { title: "Measure Text", href: `${prefix}pages/util-measure-text.html` },
                    { title: "Measure", href: `${prefix}pages/util-measure.html` },
                    { title: "Null", href: `${prefix}pages/util-null.html` },
                    { title: "Particle Emitter", href: `${prefix}pages/util-particle-emitter.html` },
                    { title: "Path Field", href: `${prefix}pages/util-path-field.html` },
                    { title: "Path Length", href: `${prefix}pages/util-path-length.html` },
                    { title: "Path Modifier", href: `${prefix}pages/util-path-modifier.html` },
                    { title: "Pin Constraint", href: `${prefix}pages/util-pin-constraint.html` },
                    { title: "Radius", href: `${prefix}pages/util-radius.html` },
                    { title: "Range Falloff", href: `${prefix}pages/util-range-falloff.html` },
                    { title: "Rig Control", href: `${prefix}pages/util-rig-control.html` },
                    { title: "Scheduling Group", href: `${prefix}pages/util-scheduling-group.html` },
                    { title: "Seconds to Frames", href: `${prefix}pages/util-seconds-to-frames.html` },
                    { title: "Sequence", href: `${prefix}pages/util-sequence.html` },
                    { title: "Shader Array", href: `${prefix}pages/util-shader-array.html` },
                    { title: "Shape Array", href: `${prefix}pages/util-shape-array.html` },
                    { title: "Speed Modifier", href: `${prefix}pages/util-speed-modifier.html` },
                    { title: "Spreadsheet", href: `${prefix}pages/util-spreadsheet.html` },
                    { title: "Spreadsheet Lookup", href: `${prefix}pages/util-spreadsheet-lookup.html` },
                    { title: "Sticky Collision Event", href: `${prefix}pages/util-sticky-collision-event.html` },
                    { title: "String Array", href: `${prefix}pages/util-string-array.html` },
                    { title: "String From Asset", href: `${prefix}pages/util-string-from-asset.html` },
                    { title: "String Generator", children: [
                        { title: "String Generator", href: `${prefix}pages/util-string-generator.html` },
                        { title: "Block Generator", href: `${prefix}pages/util-string-generator-block.html` },
                        { title: "Formatted Date and Time Generator", href: `${prefix}pages/util-string-generator-date-time.html` },
                        { title: "Formatted String Generator", href: `${prefix}pages/util-string-generator-formatted.html` },
                        { title: "Hash Generator", href: `${prefix}pages/util-string-generator-hash.html` },
                        { title: "Hexadecimal Generator", href: `${prefix}pages/util-string-generator-hex.html` },
                        { title: "Random Date Generator", href: `${prefix}pages/util-string-generator-random-date.html` },
                        { title: "Random Number Generator", href: `${prefix}pages/util-string-generator-random-number.html` },
                        { title: "Timecode Generator", href: `${prefix}pages/util-string-generator-timecode.html` },
                        { title: "Value Generator", href: `${prefix}pages/util-string-generator-value.html` },
                    ]},
                    { title: "String Length", href: `${prefix}pages/util-string-length.html` },
                    { title: "String Manipulator", children: [
                        { title: "Introduction", href: `${prefix}pages/util-string-manipulator-intro.html` },
                        { title: "Change String Case Manipulator", href: `${prefix}pages/util-string-manipulator-change-case.html` },
                        { title: "Join String Manipulator", href: `${prefix}pages/util-string-manipulator-join.html` },
                        { title: "Replace String Manipulator", href: `${prefix}pages/util-string-manipulator-replace.html` },
                        { title: "Regex String Manipulator", href: `${prefix}pages/util-string-manipulator-regex.html` },
                        { title: "Resize String Manipulator", href: `${prefix}pages/util-string-manipulator-resize.html` },
                        { title: "Shuffle String Manipulator", href: `${prefix}pages/util-string-manipulator-shuffle.html` },
                        { title: "Sub-String Manipulator", href: `${prefix}pages/util-string-manipulator-substring.html` },
                        { title: "Transition String Maniplulator", href: `${prefix}pages/util-string-manipulator-transition.html` },
                        { title: "Unicode Offset String Manipulator", href: `${prefix}pages/util-string-manipulator-unicode-offset.html` },
                    ]},
                    { title: "String", href: `${prefix}pages/util-string.html` },
                    { title: "Stroke Duplicator", href: `${prefix}pages/util-stroke-duplicator.html` },
                    { title: "Stroke", href: `${prefix}pages/util-stroke.html` },
                    { title: "Timeline Counter", href: `${prefix}pages/util-timeline-counter.html` },
                    { title: "Transform Constraint", href: `${prefix}pages/util-transform-constraint.html` },
                    { title: "Turbulence Modifier", href: `${prefix}pages/util-turbulence-modifier.html` },
                    { title: "Typeface", href: `${prefix}pages/util-typeface.html` },
                    { title: "Typeface Array", href: `${prefix}pages/util-typeface-array.html` },
                    { title: "Value Array", href: `${prefix}pages/util-value-array.html` },
                    { title: "Value2 Array", href: `${prefix}pages/util-value2-array.html` },
                    { title: "Value3 Array", href: `${prefix}pages/util-value3-array.html` },
                    { title: "Velocity Context", href: `${prefix}pages/util-velocity-context.html` },
                    { title: "Velocity Magnitude Context", href: `${prefix}pages/util-velocity-magnitude-context.html` },
                    { title: "Visibility Collision Event", href: `${prefix}pages/util-visibility-collision-event.html` },
                    { title: "Visual Modifier", href: `${prefix}pages/util-visual-modifier.html` },
                    { title: "Vortex Field", href: `${prefix}pages/util-vortex-field.html` },
                    { title: "Vortex Modifier", href: `${prefix}pages/util-vortex-modifier.html` },
                ]},

                // ===== ЭФФЕКТЫ =====
                { title: "Эффекты", children: [
                    { title: "Эффекты", href: `${prefix}pages/effects.html` },
                    { title: "Фильтры", children: [
                        { title: "Фильтры", href: `${prefix}pages/filters.html` },
                        { title: "Common Attributes (Filters)", href: `${prefix}pages/filters-common-attributes.html` },
                        { title: "Background Blur Filter", href: `${prefix}pages/filter-background-blur.html` },
                        { title: "Bilateral Blur Filter", href: `${prefix}pages/filter-bilateral-blur.html` },
                        { title: "Black and White Filter", href: `${prefix}pages/filter-black-and-white.html` },
                        { title: "Box Blur Filter", href: `${prefix}pages/filter-box-blur.html` },
                        { title: "Brightness and Contrast Filter", href: `${prefix}pages/filter-brightness-contrast.html` },
                        { title: "Bulge Filter", href: `${prefix}pages/filter-bulge.html` },
                        { title: "Chroma Key Filter", href: `${prefix}pages/filter-chroma-key.html` },
                        { title: "Chromatic Aberration Filter", href: `${prefix}pages/filter-chromatic-aberration.html` },
                        { title: "Directional Blur Filter", href: `${prefix}pages/filter-directional-blur.html` },
                        { title: "Distortion Filter", href: `${prefix}pages/filter-distortion.html` },
                        { title: "Distort Edges Filter", href: `${prefix}pages/filter-distort-edges.html` },
                        { title: "Dithering Filter", href: `${prefix}pages/filter-dithering.html` },
                        { title: "Drop Shadow", href: `${prefix}pages/filter-drop-shadow.html` },
                        { title: "Edge Detection Filter", href: `${prefix}pages/filter-edge-detection.html` },
                        { title: "Fast Blur Filter", href: `${prefix}pages/filter-fast-blur.html` },
                        { title: "Fill Color Filter", href: `${prefix}pages/filter-fill-color.html` },
                        { title: "Gamma Correction Filter", href: `${prefix}pages/filter-gamma-correction.html` },
                        { title: "Gaussian Blur Filter", href: `${prefix}pages/filter-gaussian-blur.html` },
                        { title: "Glow Filter", href: `${prefix}pages/filter-glow.html` },
                        { title: "Gradient Map Filter", href: `${prefix}pages/filter-gradient-map.html` },
                        { title: "Grain Filter", href: `${prefix}pages/filter-grain.html` },
                        { title: "Halftone Filter", href: `${prefix}pages/filter-halftone.html` },
                        { title: "HSV Adjustment Filter", href: `${prefix}pages/filter-hsv-adjustment.html` },
                        { title: "Inner Shadow Filter", href: `${prefix}pages/filter-inner-shadow.html` },
                        { title: "Invert Filter", href: `${prefix}pages/filter-invert.html` },
                        { title: "Levels Filter", href: `${prefix}pages/filter-levels.html` },
                        { title: "Light Sweep Filter", href: `${prefix}pages/filter-light-sweep.html` },
                        { title: "Linear Wipe", href: `${prefix}pages/filter-linear-wipe.html` },
                        { title: "Luminance Blur Filter", href: `${prefix}pages/filter-luminance-blur.html` },
                        { title: "Mirror Filter", href: `${prefix}pages/filter-mirror.html` },
                        { title: "Pixel Sorting Filter", href: `${prefix}pages/filter-pixel-sorting.html` },
                        { title: "Pixelate Filter", href: `${prefix}pages/filter-pixelate.html` },
                        { title: "Posterize Filter", href: `${prefix}pages/filter-posterize.html` },
                        { title: "Radial Wipe Filter", href: `${prefix}pages/filter-radial-wipe.html` },
                        { title: "RGB Split Filter", href: `${prefix}pages/filter-rgb-split.html` },
                        { title: "Scan Lines Filter", href: `${prefix}pages/filter-scan-lines.html` },
                        { title: "Scrape Filter", href: `${prefix}pages/filter-scrape.html` },
                        { title: "Sharpen Filter", href: `${prefix}pages/filter-sharpen.html` },
                        { title: "Shift Channels Filter", href: `${prefix}pages/filter-shift-channels.html` },
                        { title: "Spherise Filter", href: `${prefix}pages/filter-spherise.html` },
                        { title: "SkSL Filter", href: `${prefix}pages/filter-sksl.html` },
                        { title: "Slit Scan Filter", href: `${prefix}pages/filter-slit-scan.html` },
                        { title: "Threshold Filter", href: `${prefix}pages/filter-threshold.html` },
                        { title: "TriTone Filter", href: `${prefix}pages/filter-tritone.html` },
                        { title: "Venetian Blinds Filter", href: `${prefix}pages/filter-venetian-blinds.html` },
                        { title: "Vignette Filter", href: `${prefix}pages/filter-vignette.html` },
                        { title: "Zoom Blur Filter", href: `${prefix}pages/filter-zoom-blur.html` },
                    ]},
                    { title: "Шейдеры", children: [
                        { title: "Shaders", href: `${prefix}pages/shaders.html` },
                        { title: "Common Attributes (Shaders)", href: `${prefix}pages/shaders-common-attributes.html` },
                        { title: "Blend Shader", href: `${prefix}pages/shader-blend.html` },
                        { title: "Checkerboard Shader", href: `${prefix}pages/shader-checkerboard.html` },
                        { title: "Color Shader", href: `${prefix}pages/shader-color.html` },
                        { title: "Gradient Shader", href: `${prefix}pages/shader-gradient.html` },
                        { title: "Image Shader", href: `${prefix}pages/shader-image.html` },
                        { title: "Multi-Point Gradient Shader", href: `${prefix}pages/shader-multi-point-gradient.html` },
                        { title: "Noise Shader", href: `${prefix}pages/shader-noise.html` },
                        { title: "Shape to Shader", href: `${prefix}pages/shader-shape-to-shader.html` },
                        { title: "SkSL Shader", href: `${prefix}pages/shader-sksl.html` },
                        { title: "SLA Shader", href: `${prefix}pages/shader-sla.html` },
                        { title: "Voronoi Shader", href: `${prefix}pages/shader-voronoi.html` },
                    ]},
                ]},

                // ===== ОБЩЕЕ =====
                { title: "Общее", children: [
                    { title: "Blend Modes", href: `${prefix}pages/effects-blend-modes.html` },
                    { title: "Distribution Types", children: [
                        { title: "Introduction", href: `${prefix}pages/distribution-intro.html` },
                        { title: "Array Distribution", href: `${prefix}pages/distribution-array.html` },
                        { title: "Circle Distribution", href: `${prefix}pages/distribution-circle.html` },
                        { title: "Custom Distribution", href: `${prefix}pages/distribution-custom.html` },
                        { title: "Fibonacci Distribution", href: `${prefix}pages/distribution-fibonacci.html` },
                        { title: "Grid Distribution", href: `${prefix}pages/distribution-grid.html` },
                        { title: "Intersections Distribution", href: `${prefix}pages/distribution-intersections.html` },
                        { title: "Linear Distribution", href: `${prefix}pages/distribution-linear.html` },
                        { title: "Mask Distribution", href: `${prefix}pages/distribution-mask.html` },
                        { title: "Math Distribution", href: `${prefix}pages/distribution-math.html` },
                        { title: "Particle Distribution", href: `${prefix}pages/distribution-particle.html` },
                        { title: "Path Distribution", href: `${prefix}pages/distribution-path.html` },
                        { title: "Point Distribution", href: `${prefix}pages/distribution-point.html` },
                        { title: "Random Distribution", href: `${prefix}pages/distribution-random.html` },
                        { title: "Rose Distribution", href: `${prefix}pages/distribution-rose.html` },
                        { title: "Shape Edges Distribution", href: `${prefix}pages/distribution-shape-edges.html` },
                        { title: "Shape Points Distribution", href: `${prefix}pages/distribution-shape-points.html` },
                        { title: "Sort Distribution", href: `${prefix}pages/distribution-sort.html` },
                        { title: "Shuffle Distribution", href: `${prefix}pages/distribution-shuffle.html` },
                        { title: "Sub-Mesh Distribution", href: `${prefix}pages/distribution-sub-mesh.html` },
                        { title: "Transform Distribution", href: `${prefix}pages/distribution-transform.html` },
                        { title: "Voxelize Distribution", href: `${prefix}pages/distribution-voxelize.html` },
                    ]},
                    { title: "JavaScript Layers", href: `${prefix}pages/effects-js-layers.html` },
                    { title: "Motion Blur", href: `${prefix}pages/effects-motion-blur.html` },
                    { title: "Vector artwork support", href: `${prefix}pages/effects-vector-artwork.html` },
                    { title: "Working with Regex", href: `${prefix}pages/effects-regex.html` },
                ]},
            ]
        },

        // ============================================================
        //  СОВЕТЫ
        // ============================================================
        {
            title: "Советы",
            children: [
                { title: "Сочетания клавиш", href: `${prefix}pages/shortcuts.html` },
            ]
        },

        // ============================================================
        //  ПРИЛОЖЕНИЯ
        // ============================================================
        {
            title: "Приложения",
            children: [
                { title: "Cavalry Player", href: `${prefix}pages/cavalry-player.html` },
                { title: "Cavalry CLI", href: `${prefix}pages/cavalry-cli.html` },
            ]
        },

        // ============================================================
        //  ТЕХНИЧЕСКИЕ СВЕДЕНИЯ
        // ============================================================
        {
            title: "Технические сведения",
            children: [
                { title: "Список изменений", href: `${prefix}pages/release-notes.html` },
                { title: "Логи", href: `${prefix}pages/logs.html` },
                { title: "Математические выражения", href: `${prefix}pages/mathematical-expressions.html` },
                
                { title: "Настройки пользователя", href: `${prefix}pages/user-preferences.html` },
                { title: "Сторонние плагины", href: `${prefix}pages/third-party-plugins.html` },
                { title: "Создание скриптов", children: [
                    { title: "Введение в скриптинг", href: `${prefix}pages/scripting-getting-started.html` },
                    { title: "Модуль API", href: `${prefix}pages/scripting-api-module.html` },
                    { title: "Модуль Cavalry", href: `${prefix}pages/scripting-cavalry-module.html` },
                    { title: "Модуль Context", href: `${prefix}pages/scripting-context-module.html` },
                    { title: "Модуль Deformer", href: `${prefix}pages/scripting-deformer-module.html` },
                    { title: "Render Scripts", href: `${prefix}pages/scripting-render-scripts.html` },
                    { title: "Скриптование UI", href: `${prefix}pages/scripting-script-uis.html` },
                    { title: "Web APIs", href: `${prefix}pages/scripting-web-apis.html` },
                    { title: "Примеры скриптов", href: `${prefix}pages/scripting-example-scripts.html` },
                    { title: "Примеры выражений", href: `${prefix}pages/scripting-example-expressions.html` },
                ]},
            ]
        },
        
    ];

    // ============================================================
    //  РЕНДЕР САЙДБАРА
    // ============================================================
    function renderNode(node, depth = 0) 
    {
        const hasChildren = node.children && node.children.length > 0;
        const isCollapsedByDefault = depth > 0 || (!node.href && hasChildren);
    
        // Обычная ссылка без дочерников
        if (!hasChildren) {
            return `<li><a href="${node.href}">${node.title}</a></li>`;
        }
    
        // Группа с дочерниками — ВСЕГДА заголовок-переключатель,
        // даже если у неё есть href (переход по нему — только через первого ребёнка)
        const titleHTML = `
            <div class="nav-group-title" role="button" tabindex="0">
                <span>${node.title}</span>
                <span class="arrow">▼</span>
            </div>
        `;
    
        const childrenHTML = node.children.map(c => renderNode(c, depth + 1)).join('');
    
        return `
            <div class="nav-group${isCollapsedByDefault ? ' collapsed' : ''}">
                ${titleHTML}
                <div class="nav-group-content">
                    <ul>${childrenHTML}</ul>
                </div>
            </div>
        `;
    }

    const sidebarHTML = navData.map(node => renderNode(node, 0)).join('');

    // ============================================================
    //  ВСТАВКА + ЛОГИКА
    // ============================================================
    document.addEventListener('DOMContentLoaded', () => 
    {
        const aside = document.querySelector('aside');
        if (!aside) return;

        aside.innerHTML = sidebarHTML;

        // ===== Подсветка активного пункта + раскрытие всех родителей =====
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        aside.querySelectorAll('a').forEach(link => 
        {
            const href = link.getAttribute('href');
            if (!href) return;
            const linkPage = href.split('/').pop();

            if (linkPage === currentPath) 
            {
                link.classList.add('active');

                let parent = link.closest('.nav-group');
                while (parent) 
                {
                    parent.classList.remove('collapsed');
                    parent = parent.parentElement?.closest('.nav-group');
                }
            }
        });

        // ===== Сворачивание / разворачивание групп =====
        aside.querySelectorAll('.nav-group-title').forEach(title => 
        {
            const group = title.closest('.nav-group');
        
            const toggle = () => group.classList.toggle('collapsed');
        
            title.addEventListener('click', toggle);
            title.addEventListener('keydown', (e) => 
            {
                if (e.key === 'Enter' || e.key === ' ') 
                {
                    e.preventDefault();
                    toggle();
                }
            });
        });
    });
})();