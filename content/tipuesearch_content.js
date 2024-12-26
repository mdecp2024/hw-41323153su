var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  fqpabi8 \n 個人倉儲: https://github.com/mdecp2024/hw-41323153 \n 個人網站:  https://mdecp2024.github.io/hw-41323153su/ \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n 以下是我建立Brython的過程 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '執行 Brython 頁面、SciTE 編輯器、命令提示字元視窗、Jupyter Lab 以及 Codespaces \n \n 錯誤執行與修正 \n \n 我發現Brython 頁面、SciTE 編輯器、命令提示字元視窗、Jupyter Lab 以及 Codespaces算得非常快速且精準,這之間遇到了命令提示字元視窗需修改程式才能進行計算 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '(空心圓繪製) \n # 設定圓心和半徑\n    h, k = 5, 5  # 圓心位置\n    r = 5         # 半徑為 5\n    \n    # 遍歷 11x11 的區域\n    for y in range(11):\n        for x in range(11):\n            # 計算點 (x, y) 是否在圓的邊界上\n            # 使用圓形方程式判斷\n            distance = (x - h) ** 2 + (y - k) ** 2\n            # 若該點接近圓形的邊界\n            if abs(distance - r**2) < 3:  # 放寬條件讓圓形邊緣更平滑\n                print(\'*\', end=\'\')  # 在邊界上顯示 \'*\'\n            else:\n                print(\' \', end=\'\')  # 否則顯示空格\n        print()  # 換行\n\n# 呼叫函式來列印更圓的空心圓\nprint_better_empty_circle() \n \n 上次是使用"*"來做成金字塔,這次進階成圓形,我在這之中發現了圓形的組成以及操作方式 \n \n (黑色方塊圓形) \n from browser import html\nfrom browser import document as doc\nimport math\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 20  # 格子大小\n\nctx = canvas.getContext("2d")\n\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    """繪製單個格子"""\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\ndef grid(width, height, grid_pix):\n    """繪製格子網格"""\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\ndef fill(x, y, color):\n    """填充格子"""\n    ctx.fillStyle = color\n    ctx.fillRect(x * gs, y * gs, gs, gs)\n\ndef draw_hollow_circle(center_x, center_y, radius, tolerance=0.5):\n    """使用格子在 11x11 網格上畫空心圓"""\n    for x in range(11):\n        for y in range(11):\n            # 計算格子中心 (x, y) 到圓心 (center_x, center_y) 的距離\n            dist = math.sqrt((x - center_x) ** 2 + (y - center_y) ** 2)\n            # 檢查距離是否在圓的半徑範圍內，並且距離接近半徑 (即為圓的邊界)\n            if abs(dist - radius) <= tolerance:\n                fill(x, y, "black")\n\n# 繪製 11x11 格子\ngrid(11, 11, gs)\n\n# 圓心位置在 (5, 5)，半徑為 4，容差範圍為 0.5\ndraw_hollow_circle(5, 5, 4, tolerance=0.5) \n \n 黑色方塊繪製成圓形更加的困難,我尋找了許多放式來嘗試繪製 \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12', 'text': 'Bython (for的循環) \xa0 Jupyter (for循環) \n for i in range(87):\n    print("我很厲害") \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13_hw', 'text': '(w13) \n <!-- 引入 Brython 程式庫 -->\n<script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<!-- 啟動 Brython -->\n<script>// <![CDATA[\nwindow.onload = function() {\n    brython({debug:1, pythonpath:[\'./../cmsimde/static/\', \'../../downloads/py/\']});\n}\n// ]]></script>\n<!-- 設置容器 -->\n<div id="brython div1"></div>\n<!-- 利用 Brython 繪圖 -->\n<script type="text/python">// <![CDATA[\nfrom browser import html\nfrom browser import document as doc\n\n# 利用 HTML 建立 canvas 並定義特性\ncanvas = html.CANVAS(width=600, height=600)\nbrython_div = doc["brython div1"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\n\n# 畫兩個矩形 (紅色邊框)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.rect(200, 200, 200, 200)\nctx.stroke()\n\n# 畫對角線 (藍色)\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke()\n\n# 畫兩個圓形 (黑色)\nctx.strokeStyle = \'black\'\nctx.beginPath()\nctx.arc(200, 200, 141.4, 0, 2 * 3.14)\nctx.stroke()\nctx.beginPath()\nctx.arc(300, 300, 141.4, 0, 2 * 3.14)\nctx.stroke()\n\n\n# 儲存幾何參數\nshapes = {\n    "circle1": (200, 200, 141.4),\n    "circle2": (300, 300, 141.4),\n    "square1": (100, 100, 300, 300),\n    "square2": (200, 200, 400, 400),\n}\n\n# 簡化的判定函式\ndef is_in_circle(x, y, cx, cy, r):\n    return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2\n\ndef is_in_square(x, y, x1, y1, x2, y2):\n    return x1 <= x <= x2 and y1 <= y <= y2\n\n# 根據點判定區域並返回顏色\ndef get_region_color(x, y):\n    c1 = is_in_circle(x, y, *shapes["circle1"])\n    c2 = is_in_circle(x, y, *shapes["circle2"])\n    s1 = is_in_square(x, y, *shapes["square1"])\n    s2 = is_in_square(x, y, *shapes["square2"])\n\n    # 不在任何圓內\n    if not c1 and not c2:\n        return None\n\n    # 同時在兩圓內的區域分割，這裡會根據交集劃分 4 個區域\n    if c1 and c2:\n        # 依照相對於對角線的上下、左右位置分割區域，給予不同顏色\n        if x < 250 and y < 250:\n            return "#FF5733"  # 左上區域\n        elif x >= 250 and y < 250:\n            return "#FF8D1A"  # 右上區域\n        elif x < 250 and y >= 250:\n            return "#33FF57"  # 左下區域\n        elif x >= 250 and y >= 250:\n            return "#1A8DFF"  # 右下區域\n\n    # 第一個圓的判定\n    if c1:\n        if s1:\n            return "#CA8EFF" if y < x else "#96FED1" \n        if y < shapes["square1"][1]:\n            return "#460046"  \n        if y > shapes["square1"][3]:\n            return "#0080FF"  \n        if x < shapes["square1"][0]:\n            return "#E1E100"  \n        if x > shapes["square1"][2]:\n            return "#00FFFF"  \n\n    # 第二個圓的判定\n    if c2:\n        if s2:\n            return "#006030"  \n        if y < shapes["square2"][1]:\n            return "#5B4B00"  \n        if y > shapes["square2"][3]:\n            return "#A23400"  \n        if x < shapes["square2"][0]:\n            return "#82D900"  \n        if x > shapes["square2"][2]:\n            return "#6FB7B7"  \n\n    return "#01B468"  # 默認顏色\n\n# 繪製掃描點並著色\ndef scan_and_draw():\n    step = 1  # 減小步長提升細膩程度\n    for y in range(0, canvas.height, step):\n        for x in range(0, canvas.width, step):\n            color = get_region_color(x, y)\n            if color:\n                ctx.fillStyle = color\n                ctx.fillRect(x, y, step, step)  # 使用細小矩形填充\n\n# 開始掃描和著色\nscan_and_draw()\n\n# 畫兩個矩形 (紅色邊框)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.rect(200, 200, 200, 200)\nctx.stroke()\n\n# 畫對角線 (藍色)\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke()\n\n# 畫兩個圓形 (黑色)\nctx.strokeStyle = \'black\'\nctx.beginPath()\nctx.arc(200, 200, 141.4, 0, 2 * 3.14)\nctx.stroke()\nctx.beginPath()\nctx.arc(300, 300, 141.4, 0, 2 * 3.14)\nctx.stroke() \n \n  引入 Brython 程式庫  \n \n \n  啟動 Brython  \n \n  設置容器  \n \n  利用 Brython 繪圖  \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_ex', 'text': '(w14) \n from browser import html\nfrom browser import document as doc\nimport random\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    # 創建 canvas 並設置寬度與高度\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]\n    brython_div <= canvas\n    \n    # 獲取 canvas 的 2D 上下文\n    ctx = canvas.getContext("2d")\n    \n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    r = random.randint(0, 255)\n    g = random.randint(0, 255)\n    b = random.randint(0, 255)\n    return f"rgb({r}, {g}, {b})"\n\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    # 初始化畫布\n    canvas, ctx = initialize_canvas(400, 400)\n    \n    # 清除畫布\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n    \n    # 顏色區域存儲\n    color_dict = {}\n\n    # 使用掃描線方法填充區域\n    for py in range(0, canvas.height):\n        # 逐行掃描，判斷每個點是否在圓內\n        current_color = None  # 當前掃描線區域的顏色\n        for px in range(0, canvas.width):\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n            \n            if in_circle1 and in_circle2 and in_circle3:\n                # 交集區域\n                if "intersection" not in color_dict:\n                    color_dict["intersection"] = random_color_generator()\n                current_color = color_dict["intersection"]\n            elif in_circle1 and in_circle2:\n                # 只在圓1與圓2的交集區域\n                if "circle1_circle2" not in color_dict:\n                    color_dict["circle1_circle2"] = random_color_generator()\n                current_color = color_dict["circle1_circle2"]\n            elif in_circle2 and in_circle3:\n                # 只在圓2與圓3的交集區域\n                if "circle2_circle3" not in color_dict:\n                    color_dict["circle2_circle3"] = random_color_generator()\n                current_color = color_dict["circle2_circle3"]\n            elif in_circle1 and in_circle3:\n                # 只在圓1與圓3的交集區域\n                if "circle1_circle3" not in color_dict:\n                    color_dict["circle1_circle3"] = random_color_generator()\n                current_color = color_dict["circle1_circle3"]\n            elif in_circle1:\n                # 只在圓1內\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                # 只在圓2內\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                # 只在圓3內\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                # 點不在圓內，畫外區域\n                current_color = "white"  # 背景色白色\n\n            # 填充顏色\n            ctx.fillStyle = current_color\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n\n# 三個圓心和半徑的設定\n# 假設三個圓心分佈成等邊三角形的頂點，並設置它們的半徑\nradius = 100  # 圓的半徑\nx1, y1 = 150, 200  # 圓1 圓心\nx2, y2 = 250, 200  # 圓2 圓心\nx3, y3 = 200, 100  # 圓3 圓心\n\n# 呼叫畫圓函式\ndraw_circles(x1, y1, radius, x2, y2, radius, x3, y3, radius) \n \n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w15', 'text': '("從 1 累加到 100") \n # 階段 1: 計算從 1 到 50 的總和\nstage_1 = sum(range(1, 51))\n\n# 階段 2: 計算從 51 到 100 的總和\nstage_2 = sum(range(51, 101))\n\n# 最終結果：將兩個階段的總和加起來\ntotal = stage_1 + stage_2\n\n# 輸出每個階段的結果和最終總和\nprint(f"階段 1 (1 到 50) 的總和是: {stage_1}")\nprint(f"階段 2 (51 到 100) 的總和是: {stage_2}")\nprint(f"階段 1 和階段 2 的總和: {stage_1} + {stage_2} = {total}")\nprint(f"從 1 累加到 100 的總和是: {total}")\n \n ("addto") \n def addto(start, end):\n    total = 0\n    for i in range(start, end + 1):  # 使用 range 設定從 start 到 end (包含 end)\n        total += i  # 累加每個數字\n    return total  # 返回總和\n\n# 調用函式\nresult = addto(1, 100)\nprint("從 1 累加到 100 的總和是:", result) \n (add_only_even) \n def add_only_even(start, end):\n    # 初始化總和為 0\n    total = 0\n    \n    # 遍歷從 start 到 end 的數字\n    for i in range(start, end + 1):\n        if i % 2 == 0:  # 判斷是否為偶數\n            total += i  # 如果是偶數，則累加到 total\n    \n    return total  # 返回總和\n\n# 調用函式，計算從 1 到 100 的偶數總和\nresult = add_only_even(1, 100)\nprint(f"從 1 加到 100 之間的偶數總和是: {result}")\n \n (add_avoid_8) \n def add_avoid_8(start, end):\n    total = 0  # 初始化總和\n    for i in range(start, end + 1):  # 遍歷從 start 到 end 的每個數字\n        if \'8\' not in str(i):  # 檢查數字是否包含 \'8\'\n            total += i  # 如果不包含 \'8\'，則加到總和\n    return total  # 返回總和\n\n# 調用函式，計算從 1 到 100 的累加總和，避開數字中包含 \'8\' 的數字\nresult = add_avoid_8(1, 100)\nprint(f"從 1 到 100 累加，避開數字包含 \'8\' 的總和是: {result}") \n ( (add_avoid_8_3) \n def add_avoid_8(start, end):\n    total = 0  # 初始化總和變數\n    for i in range(start, end + 1):  # 從 start 到 end（包含 end）\n        if \'8\' in str(i) or \'3\' in str(i):  # 檢查數字中是否包含 \'8\' 或 \'3\'\n            continue  # 如果包含 \'8\' 或 \'3\'，跳過這個數字\n        total += i  # 如果不包含，則將數字加到總和\n    return total  # 返回總和\n\n# 呼叫函式並輸出結果\nresult = add_avoid_8(1, 100)\nprint("從 1 累加到 100 的總和，避開含有 8 和 3 的數字，是:", result) \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': '(w16圖形) \n \n <!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    \n    <!-- 引入 Brython 程式庫 -->\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3.10.5/brython.min.js"></script>\n    \n    <!-- 啟動 Brython -->\n    <script type="text/javascript">\n        window.onload = function() {\n            brython();  // 啟動 Brython\n        }\n    </script>\n</head>\n<body onload="brython()">\n    <!-- 用來顯示畫布的區域 -->\n    <div id="brython_div1"></div>\n\n    <!-- 你的 Brython Python 程式碼 -->\n    <script type="text/python">\n        from browser import html\n        from browser import document as doc\n\n        # 利用 html 建立 canvas 超文件物件，設置為長方形\n        canvas = html.CANVAS(width=600, height=400)  # 設置畫布大小為 600x400\n        brython_div = doc["brython_div1"]\n        brython_div <= canvas\n\n        # 取得 canvas 的繪圖上下文\n        ctx = canvas.getContext("2d")\n\n        # 畫出 X 軸\n        ctx.beginPath()\n        ctx.strokeStyle = \'black\'\n        ctx.lineWidth = 2\n        ctx.moveTo(31, 53)  # 原點\n        ctx.lineTo(570, 53)  # 向右延伸，畫布寬度為 600，故延伸到 570 (避免畫布右邊界)\n        ctx.stroke()\n\n        # 畫出 Y 軸\n        ctx.beginPath()\n        ctx.moveTo(31, 53)  # 原點\n        ctx.lineTo(31, 350)  # 向下延伸，畫布高度為 400，故延伸到 350 (避免畫布下邊界)\n        ctx.stroke()\n\n        # 標示原點座標\n        ctx.font = "12px Arial"\n        ctx.fillStyle = "black"\n        ctx.fillText("(31, 53)", 35, 65)\n\n        # 位移偏移量，將原點 (31, 53) 作為新的繪圖基準\n        offset_x = 31\n        offset_y = 53\n\n        # 畫橙色六邊形\n        ctx.beginPath()\n        ctx.fillStyle = "#F47920"\n        ctx.moveTo(offset_x + 30, offset_y + 40)  # 向下調整起始位置\n        ctx.lineTo(offset_x + 50, offset_y + 20)\n        ctx.lineTo(offset_x + 80, offset_y + 20)\n        ctx.lineTo(offset_x + 100, offset_y + 40)\n        ctx.lineTo(offset_x + 80, offset_y + 60)\n        ctx.lineTo(offset_x + 50, offset_y + 60)\n        ctx.closePath()\n        ctx.fill()\n\n        # 畫綠色菱形\n        ctx.beginPath()\n        ctx.fillStyle = "#009F95"\n        ctx.moveTo(offset_x + 110, offset_y + 40)  # 向下調整\n        ctx.lineTo(offset_x + 130, offset_y + 20)\n        ctx.lineTo(offset_x + 150, offset_y + 40)\n        ctx.lineTo(offset_x + 130, offset_y + 60)\n        ctx.closePath()\n        ctx.fill()\n\n        # 藍色三角形 (頂點在菱形右側，方向朝下)\n        ctx.beginPath()\n        ctx.fillStyle = "#40B4CB"\n        ctx.moveTo(offset_x + 160, offset_y + 40)  # 頂點在菱形右側\n        ctx.lineTo(offset_x + 140, offset_y + 60)  # 左下角\n        ctx.lineTo(offset_x + 180, offset_y + 60)  # 右下角\n        ctx.closePath()\n        ctx.fill()\n\n        # 畫粉紅色圓形\n        ctx.beginPath()\n        ctx.fillStyle = "#EB008B"\n        ctx.arc(offset_x + 200, offset_y + 40, 12, 0, 2 * 3.14159)  # 半徑縮小並調整位置\n        ctx.fill()\n\n        # 畫黃色正方形\n        ctx.beginPath()\n        ctx.fillStyle = "#FDD56A"\n        ctx.rect(offset_x + 230, offset_y + 20, 25, 25)  # 向下調整位置\n        ctx.fill()\n\n        # 畫藍色矩形\n        ctx.beginPath()\n        ctx.fillStyle = "#003A70"\n        ctx.rect(offset_x + 270, offset_y + 30, 40, 15)  # 向下調整位置\n        ctx.fill()\n    </script>\n</body>\n</html> \n \n \n \n  引入 Brython 程式庫  \n \n  啟動 Brython  \n \n  用來顯示畫布的區域  \n \n  你的 Brython Python 程式碼  \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'w16_exam2', 'text': '(迷宮) \n \n from random import shuffle, randrange\nfrom browser import document, window, html\n\n# 生成迷宫的函数\ndef make_maze(w = 32, h = 16):  # 增大迷宫的宽度和高度\n    # 1. 初始化迷宫的墙壁和访问状态\n    vis = []  # 记录每个格子是否被访问过\n    path = []  # 记录有效路径的格子\n\n    # 使用双重循环来创建 h 行，每行有 w 个 0，0表示未访问\n    for i in range(h):\n        row = []  # 创建一个空的行列表\n        for j in range(w):\n            row.append(0)  # 将 0 添加到当前行\n        vis.append(row)\n\n    # 初始化 hor 和 ver 为空列表\n    hor = []\n    ver = []\n\n    # 2. 使用双重循环创建水平方向墙壁 (hor)\n    for i in range(h + 1):\n        row = []  # 创建一行水平方向墙壁\n        for j in range(w):\n            row.append("+--")  # 每一列的墙壁是 "+--"\n        hor.append(row)  # 将这一行添加到 hor 中\n\n    # 使用双重循环创建垂直方向墙壁 (ver)\n    for i in range(h):\n        row = []  # 创建一行垂直方向墙壁\n        for j in range(w):\n            row.append("|  ")  # 每一列的墙壁是 "|  "\n        ver.append(row)  # 将这一行添加到 ver 中\n\n    # 3. 定义递归函数，生成迷宫\n    def walk(x, y):\n        # 标记当前格子为已访问\n        vis[y][x] = 1\n        path.append((x, y))  # 记录这个格子是路径的一部分\n\n        # 定义四个可能的移动方向：左、下、右、上\n        directions = [(x - 1, y), (x, y + 1), (x + 1, y), (x, y - 1)]\n        shuffle(directions)  # 随机打乱方向顺序\n\n        # 对每一个随机打乱的方向进行探索\n        for xx, yy in directions:\n            # 如果新的位置在迷宫范围内且未访问过\n            if 0 <= xx < w and 0 <= yy < h and vis[yy][xx] == 0:\n                # 如果是左右方向的移动，去除垂直墙壁\n                if xx == x:\n                    hor[max(y, yy)][x] = "+  "\n                # 如果是上下方向的移动，去除水平墙壁\n                if yy == y:\n                    ver[y][max(x, xx)] = "   "\n\n                # 递归调用，继续探索新位置\n                walk(xx, yy)\n\n    # 随机选择起点开始生成迷宫\n    start_x = randrange(1, w - 1)  # 确保起点不在墙壁上\n    start_y = randrange(1, h - 1)  # 确保起点不在墙壁上\n    walk(start_x, start_y)\n\n    # 返回生成的迷宫墙壁、起点、终点和路径\n    return hor, ver, start_x, start_y, path\n\n# 绘制迷宫\ndef draw_maze():\n    w = 32  # 迷宫宽度，增大为 32\n    h = 16  # 迷宫高度，增大为 16\n    hor, ver, start_x, start_y, path = make_maze(w, h)  # 生成迷宫墙壁和路径\n\n    # 动态设置画布大小\n    canvas = html.CANVAS(1024, 1024)  # 增大画布\n    div = document["brython_div1"]\n    div <= canvas\n    ctx = canvas.getContext("2d")\n\n    # 每个格子的尺寸\n    cell_width = canvas.width / w\n    cell_height = canvas.height / h\n\n    # 设置绘图颜色和线宽\n    ctx.strokeStyle = "blue"  # 设置线条颜色为蓝色\n    ctx.lineWidth = 2  # 设置线宽为 2 像素\n\n    # 绘制水平方向的墙壁\n    for i in range(h + 1):\n        for j in range(w):\n            if hor[i][j] == "+--":\n                ctx.beginPath()\n                ctx.moveTo(j * cell_width, i * cell_height)\n                ctx.lineTo((j + 1) * cell_width, i * cell_height)\n                ctx.stroke()\n\n    # 绘制垂直方向的墙壁\n    for i in range(h):\n        for j in range(w):\n            if ver[i][j] == "|  ":\n                ctx.beginPath()\n                ctx.moveTo(j * cell_width, i * cell_height)\n                ctx.lineTo(j * cell_width, (i + 1) * cell_height)\n                ctx.stroke()\n\n    # 确保最右边的垂直墙壁也被绘制\n    for i in range(h):\n        ctx.beginPath()\n        ctx.moveTo((w) * cell_width, i * cell_height)\n        ctx.lineTo((w) * cell_width, (i + 1) * cell_height)\n        ctx.stroke()\n\n    # 标示入口与出口\n    # 入口 (绿色) -> 位置会在边缘，避免压到线\n    ctx.fillStyle = "#FF0000"\n    ctx.beginPath()\n    ctx.arc(start_x * cell_width + cell_width / 2, start_y * cell_height + cell_height / 2, 5, 0, 2 * window.Math.PI)\n    ctx.fill()\n    ctx.fillStyle = "#FF0000"\n    ctx.fillText("(31,53)", start_x * cell_width + cell_width / 2 - 5, start_y * cell_height + cell_height / 2 - 10)\n\n    # 出口 (蓝色) -> 位置会在边缘\n    exit_x = w - 2  # 确保出口不压到墙壁\n    exit_y = h - 2  # 确保出口不压到墙壁\n    ctx.fillStyle = "#930000"\n    ctx.beginPath()\n    ctx.arc(exit_x * cell_width + cell_width / 2, exit_y * cell_height + cell_height / 2, 5, 0, 2 * window.Math.PI)\n    ctx.fill()\n    ctx.fillStyle = "#930000"\n    ctx.fillText("出口", exit_x * cell_width + cell_width / 2 - 5, exit_y * cell_height + cell_height / 2 - 10)\n\n# 在页面加载时，绘制迷宫\ndraw_maze() \n \n \n \n \n  A div where we will place the canvas  \n \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n \n \n \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};