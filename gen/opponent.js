// Originally translated from src/OPPONENT.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Opponents",
  ["Form", "frm_Opponents", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Introduce Computer Opponents", "BackColor": 0, "Left": 1260, "Top": 1440, "Width": 7365, "Height": 4020, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1260, "ClientTop": 1440, "ClientWidth": 7365, "ClientHeight": 4020}, [
    ["Timer", "Timer1", {"Interval": 8000, "Left": 3060, "Top": 1800}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 0, "Left": 30, "Top": 6480, "Width": 9555, "Height": 405, "TabIndex": 45, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 1, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "1", "IntBkg": 0}, [
        ["VideoSoftElastic", "b_Hoff", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 8205, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 52, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Hoff Miester", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Exit", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 1365, "Height": 405, "TabIndex": 51, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Gizzy", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 1380, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 50, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Gizzy", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Trading", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 2745, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 49, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Trading Corp.", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Roke", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 6840, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 48, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Roke", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Vander", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 4110, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 47, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Vandergriff", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Puffer", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 5475, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 46, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Puffer", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304, "PicturePos": 9}]
      ]],
      ["MMControl", "b_Sound", {"Left": 4890, "Top": 270, "Width": 3540, "Height": 330, "TabIndex": 44, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic22", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 6615, "Top": 4155, "Width": 2670, "Height": 1860, "TabIndex": 7, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 3, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "CaptionPos": 3, "ShadowColor": 32896, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_Image6Container", {"BackColor": 4194304, "Left": 150, "Top": 150, "Width": 2370, "Height": 735, "TabIndex": 22, "AutoSizeChildren": 3, "BorderWidth": 3, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["Image", "Image6", {"Left": 45, "Top": 45, "Width": 2280, "Height": 645, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Container6", {"BackColor": 4194304, "Left": 150, "Top": 975, "Width": 2370, "Height": 735, "TabIndex": 21, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["VideoSoftElastic", "b_6e", {"BackColor": 16777088, "Left": 0, "Top": 600, "Width": 2370, "Height": 135, "TabIndex": 58, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Intelligence", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_6d", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 2370, "Height": 150, "TabIndex": 43, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "Hoff Miester", "CaptionPos": 4, "IntBkg": 4194304}],
          ["VideoSoftElastic", "b_6a", {"BackColor": 16777088, "Left": 0, "Top": 150, "Width": 2370, "Height": 150, "TabIndex": 42, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Ruthless", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_6b", {"BackColor": 16777088, "Left": 0, "Top": 300, "Width": 2370, "Height": 150, "TabIndex": 41, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Back Stabbing", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_6c", {"BackColor": 16777088, "Left": 0, "Top": 450, "Width": 2370, "Height": 150, "TabIndex": 40, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Aggressive", "CaptionPos": 4, "IntBkg": 16777088}]
        ]]
      ]],
      ["VideoSoftElastic", "VSElastic18", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 3435, "Top": 4155, "Width": 2745, "Height": 1860, "TabIndex": 6, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 3, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "CaptionPos": 3, "ShadowColor": 32896, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_Image5Container", {"BackColor": 4194304, "Left": 150, "Top": 150, "Width": 2445, "Height": 735, "TabIndex": 20, "AutoSizeChildren": 3, "BorderWidth": 3, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["Image", "Image5", {"Left": 45, "Top": 45, "Width": 2355, "Height": 645, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Container5", {"BackColor": 4194304, "Left": 150, "Top": 975, "Width": 2445, "Height": 735, "TabIndex": 19, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["VideoSoftElastic", "b_5e", {"BackColor": 16777088, "Left": 0, "Top": 600, "Width": 2445, "Height": 135, "TabIndex": 57, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Intelligence", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_5d", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 2445, "Height": 150, "TabIndex": 39, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "Roke Transport", "CaptionPos": 4, "IntBkg": 4194304}],
          ["VideoSoftElastic", "b_5a", {"BackColor": 16777088, "Left": 0, "Top": 150, "Width": 2445, "Height": 150, "TabIndex": 38, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Entrepreneurial", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_5c", {"BackColor": 16777088, "Left": 0, "Top": 450, "Width": 2445, "Height": 150, "TabIndex": 37, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Risk Taker", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_5b", {"BackColor": 16777088, "Left": 0, "Top": 300, "Width": 2445, "Height": 150, "TabIndex": 36, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Innovative", "CaptionPos": 4, "IntBkg": 16777088}]
        ]]
      ]],
      ["VideoSoftElastic", "VSElastic14", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 315, "Top": 4155, "Width": 2715, "Height": 1860, "TabIndex": 5, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 3, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "CaptionPos": 3, "ShadowColor": 32896, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_Image4Container", {"BackColor": 4194304, "Left": 150, "Top": 150, "Width": 2415, "Height": 735, "TabIndex": 18, "AutoSizeChildren": 3, "BorderWidth": 3, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["Image", "Image4", {"Left": 45, "Top": 45, "Width": 2325, "Height": 645, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Container4", {"BackColor": 4194304, "Left": 150, "Top": 975, "Width": 2415, "Height": 735, "TabIndex": 17, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["VideoSoftElastic", "b_4e", {"BackColor": 16777088, "Left": 0, "Top": 600, "Width": 2415, "Height": 135, "TabIndex": 56, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Intelligence", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_4d", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 2415, "Height": 150, "TabIndex": 35, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "Puffer Inc.", "CaptionPos": 4, "IntBkg": 4194304}],
          ["VideoSoftElastic", "b_4a", {"BackColor": 16777088, "Left": 0, "Top": 150, "Width": 2415, "Height": 150, "TabIndex": 34, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Start-up", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_4b", {"BackColor": 16777088, "Left": 0, "Top": 300, "Width": 2415, "Height": 150, "TabIndex": 33, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Naive", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_4c", {"BackColor": 16777088, "Left": 0, "Top": 450, "Width": 2415, "Height": 150, "TabIndex": 32, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Incompetent", "CaptionPos": 4, "IntBkg": 16777088}]
        ]]
      ]],
      ["VideoSoftElastic", "VSElastic10", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 6615, "Top": 1830, "Width": 2670, "Height": 1860, "TabIndex": 4, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 3, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "CaptionPos": 3, "ShadowColor": 32896, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_Image3Container", {"BackColor": 4194304, "Left": 150, "Top": 150, "Width": 2370, "Height": 735, "TabIndex": 15, "AutoSizeChildren": 3, "BorderWidth": 3, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["Image", "Image3", {"Left": 45, "Top": 45, "Width": 2280, "Height": 645, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Container3", {"BackColor": 4194304, "Left": 150, "Top": 975, "Width": 2370, "Height": 735, "TabIndex": 14, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["VideoSoftElastic", "b_3e", {"BackColor": 16777088, "Left": 0, "Top": 600, "Width": 2370, "Height": 135, "TabIndex": 55, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Intelligence", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_3d", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 2370, "Height": 150, "TabIndex": 31, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "Vandergriff Ltd.", "CaptionPos": 4, "IntBkg": 4194304}],
          ["VideoSoftElastic", "b_3a", {"BackColor": 16777088, "Left": 0, "Top": 150, "Width": 2370, "Height": 150, "TabIndex": 30, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Old Guard", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_3b", {"BackColor": 16777088, "Left": 0, "Top": 300, "Width": 2370, "Height": 150, "TabIndex": 29, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Cautious", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_3c", {"BackColor": 16777088, "Left": 0, "Top": 450, "Width": 2370, "Height": 150, "TabIndex": 28, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Conservative", "CaptionPos": 4, "IntBkg": 16777088}]
        ]]
      ]],
      ["VideoSoftElastic", "VSElastic6", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 3435, "Top": 1830, "Width": 2730, "Height": 1860, "TabIndex": 3, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 3, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "CaptionPos": 3, "ShadowColor": 32896, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_Image2Container", {"BackColor": 4194304, "Left": 150, "Top": 150, "Width": 2430, "Height": 735, "TabIndex": 16, "AutoSizeChildren": 3, "BorderWidth": 3, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["Image", "Image2", {"Left": 45, "Top": 45, "Width": 2340, "Height": 645, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Container2", {"BackColor": 4194304, "Left": 150, "Top": 975, "Width": 2430, "Height": 735, "TabIndex": 10, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["VideoSoftElastic", "b_2e", {"BackColor": 16777088, "Left": 0, "Top": 600, "Width": 2430, "Height": 135, "TabIndex": 54, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Intelligence", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_2d", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 2430, "Height": 150, "TabIndex": 26, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "Trading Corp. IV", "CaptionPos": 4, "IntBkg": 4194304}],
          ["VideoSoftElastic", "b_2a", {"BackColor": 16777088, "Left": 0, "Top": 150, "Width": 2430, "Height": 150, "TabIndex": 25, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Corporate", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_2b", {"BackColor": 16777088, "Left": 0, "Top": 300, "Width": 2430, "Height": 150, "TabIndex": 24, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "By The Book", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_2c", {"BackColor": 16777088, "Left": 0, "Top": 450, "Width": 2430, "Height": 150, "TabIndex": 23, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Neutral", "CaptionPos": 4, "IntBkg": 16777088}]
        ]]
      ]],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 300, "Top": 150, "Width": 9000, "Height": 1275, "TabIndex": 2, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 10, "Caption": "You are competing against six computer controlled companies.  Each company has its own personality and a unique business strategy.  Click on the buttons below to change each computer opponent's intelligence.", "CaptionPos": 4, "IntBkg": 4194304}],
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 315, "Top": 1830, "Width": 2715, "Height": 1860, "TabIndex": 1, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 3, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "CaptionPos": 3, "ShadowColor": 32896, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_Image1Container", {"BackColor": 4194304, "Left": 150, "Top": 150, "Width": 2415, "Height": 735, "TabIndex": 9, "AutoSizeChildren": 3, "BorderWidth": 3, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["Image", "Image1", {"Left": 45, "Top": 45, "Width": 2325, "Height": 645, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Container1", {"BackColor": 4194304, "Left": 150, "Top": 975, "Width": 2415, "Height": 735, "TabIndex": 8, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
          ["VideoSoftElastic", "b_1e", {"BackColor": 16777088, "Left": 0, "Top": 600, "Width": 2415, "Height": 135, "TabIndex": 53, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Intelligence", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_1a", {"BackColor": 16777088, "Left": 0, "Top": 150, "Width": 2415, "Height": 150, "TabIndex": 27, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Independent", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_1c", {"BackColor": 16777088, "Left": 0, "Top": 450, "Width": 2415, "Height": 150, "TabIndex": 13, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Chaotic", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_1b", {"BackColor": 16777088, "Left": 0, "Top": 300, "Width": 2415, "Height": 150, "TabIndex": 12, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "Caption": "Freewheeling", "CaptionPos": 4, "IntBkg": 16777088}],
          ["VideoSoftElastic", "b_1d", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 2415, "Height": 150, "TabIndex": 11, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "Gizzy Shipping", "CaptionPos": 4, "IntBkg": 4194304}]
        ]]
      ]]
    ]]
  ]],
function (me) {
    const { Timer1, FillElastic, VSElastic3, b_Hoff, b_Exit, b_Gizzy, b_Trading, b_Roke } = me.controls;
    const { b_Vander, b_Puffer, b_Sound, VSElastic22, b_Image6Container, Image6, b_Container6, b_6e } = me.controls;
    const { b_6d, b_6a, b_6b, b_6c, VSElastic18, b_Image5Container, Image5, b_Container5 } = me.controls;
    const { b_5e, b_5d, b_5a, b_5c, b_5b, VSElastic14, b_Image4Container, Image4 } = me.controls;
    const { b_Container4, b_4e, b_4d, b_4a, b_4b, b_4c, VSElastic10, b_Image3Container } = me.controls;
    const { Image3, b_Container3, b_3e, b_3d, b_3a, b_3b, b_3c, VSElastic6 } = me.controls;
    const { b_Image2Container, Image2, b_Container2, b_2e, b_2d, b_2a, b_2b, b_2c } = me.controls;
    const { VSElastic2, VSElastic1, b_Image1Container, Image1, b_Container1, b_1e, b_1a, b_1c } = me.controls;
    const { b_1b, b_1d } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    let animStep = 0;

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        Timer1.Enabled = 0;
        b_Sound.Command = "Close";
        FillElastic.Visible = 0;
        me.Tag = "";
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = 0xFF0000;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x400000;
    }

    async function b_Gizzy_Click() {
        await setRivalIntelligence(2);
    }

    function b_Gizzy_MouseDown(Button, Shift, X, Y) {
        b_Gizzy.BackColor = 0xFF0000;
    }

    function b_Gizzy_MouseUp(Button, Shift, X, Y) {
        b_Gizzy.BackColor = 0x400000;
    }

    async function b_Hoff_Click() {
        await setRivalIntelligence(6);
    }

    function b_Hoff_MouseDown(Button, Shift, X, Y) {
        b_Hoff.BackColor = 0xFF0000;
    }

    function b_Hoff_MouseUp(Button, Shift, X, Y) {
        b_Hoff.BackColor = 0x400000;
    }

    async function b_Puffer_Click() {
        await setRivalIntelligence(4);
    }

    function b_Puffer_MouseDown(Button, Shift, X, Y) {
        b_Puffer.BackColor = 0xFF0000;
    }

    function b_Puffer_MouseUp(Button, Shift, X, Y) {
        b_Puffer.BackColor = 0x400000;
    }

    async function b_Roke_Click() {
        await setRivalIntelligence(5);
    }

    function b_Roke_MouseDown(Button, Shift, X, Y) {
        b_Roke.BackColor = 0xFF0000;
    }

    function b_Roke_MouseUp(Button, Shift, X, Y) {
        b_Roke.BackColor = 0x400000;
    }

    async function b_Trading_Click() {
        await setRivalIntelligence(1);
    }

    function b_Trading_MouseDown(Button, Shift, X, Y) {
        b_Trading.BackColor = 0xFF0000;
    }

    function b_Trading_MouseUp(Button, Shift, X, Y) {
        b_Trading.BackColor = 0x400000;
    }

    async function b_Vander_Click() {
        await setRivalIntelligence(3);
    }

    function b_Vander_MouseDown(Button, Shift, X, Y) {
        b_Vander.BackColor = 0xFF0000;
    }

    function b_Vander_MouseUp(Button, Shift, X, Y) {
        b_Vander.BackColor = 0x400000;
    }

    async function setRivalIntelligence(rival) {
        let newIntelligence = 0;
        let rivalName = "";
        rival = CInt(rival);
        if (rival == 1) {
            rivalName = "Trading Corp. IV";
        } else if (rival == 2) {
            rivalName = "Gizzy";
        } else if (rival == 3) {
            rivalName = "Vandergriff";
        } else if (rival == 4) {
            rivalName = "Puffer";
        } else if (rival == 5) {
            rivalName = "Roke";
        } else if (rival == 6) {
            rivalName = "Hoff Miester";
        }
        newIntelligence = await askNumber(0, Str(rivals.intelligence[rival]), 25, 200, rivalName + "'s intelligence can range from 25% to 200%." + "\n" + "\n" + "Currently, " + rivalName + "'s intelligence is set at " + Str(rivals.intelligence[rival]) + "%.", " ");
        if (newIntelligence == -3333) {
        } else if (newIntelligence < 25) {
            rivals.intelligence[rival] = 25;
        } else if (newIntelligence > 200) {
            rivals.intelligence[rival] = 200;
        } else {
            rivals.intelligence[rival] = newIntelligence;
        }
    }

    function Form_Activate() {
        b_1e.Caption = "Intelligence = " + Str(rivals.intelligence[2]) + "%";
        b_2e.Caption = "Intelligence = " + Str(rivals.intelligence[1]) + "%";
        b_3e.Caption = "Intelligence = " + Str(rivals.intelligence[3]) + "%";
        b_4e.Caption = "Intelligence = " + Str(rivals.intelligence[4]) + "%";
        b_5e.Caption = "Intelligence = " + Str(rivals.intelligence[5]) + "%";
        b_6e.Caption = "Intelligence = " + Str(rivals.intelligence[6]) + "%";
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_Exit_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        animStep = 1;
        b_Image1Container.Visible = 0;
        b_Container1.Visible = -1;
        b_Image2Container.Visible = 0;
        b_Container2.Visible = -1;
        b_Image3Container.Visible = 0;
        b_Container3.Visible = -1;
        b_Image4Container.Visible = 0;
        b_Container4.Visible = -1;
        b_Image5Container.Visible = 0;
        b_Container5.Visible = -1;
        b_Image6Container.Visible = 0;
        b_Container6.Visible = -1;
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op2.bmp");
        b_Image1Container.Visible = -1;
        b_Container1.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "op2.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    function Timer1_Timer() {
        animStep = animStep + 1;
        if (animStep >= 14) {
            animStep = 1;
        }
        if (animStep == 1) {
            Timer1.Interval = 8000;
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op2.bmp");
            b_Image1Container.Visible = -1;
            b_Container1.Visible = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "op2.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        } else if (animStep == 2) {
            Timer1.Interval = 500;
            Image1.Picture = LoadPicture("");
            b_Image1Container.Visible = 0;
            b_Container1.Visible = -1;
        } else if (animStep == 3) {
            Timer1.Interval = 8000;
            Image2.Picture = LoadPicture(Trim(paths.imageDir) + "op1.bmp");
            b_Image2Container.Visible = -1;
            b_Container2.Visible = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "op1.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        } else if (animStep == 4) {
            Timer1.Interval = 500;
            Image2.Picture = LoadPicture("");
            b_Image2Container.Visible = 0;
            b_Container2.Visible = -1;
        } else if (animStep == 5) {
            Timer1.Interval = 8000;
            Image3.Picture = LoadPicture(Trim(paths.imageDir) + "op3.bmp");
            b_Image3Container.Visible = -1;
            b_Container3.Visible = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "op3.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        } else if (animStep == 6) {
            Timer1.Interval = 500;
            Image3.Picture = LoadPicture("");
            b_Image3Container.Visible = 0;
            b_Container3.Visible = -1;
        } else if (animStep == 7) {
            Timer1.Interval = 5500;
            Image4.Picture = LoadPicture(Trim(paths.imageDir) + "op4.bmp");
            b_Image4Container.Visible = -1;
            b_Container4.Visible = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "op4.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        } else if (animStep == 8) {
            Timer1.Interval = 500;
            Image4.Picture = LoadPicture("");
            b_Image4Container.Visible = 0;
            b_Container4.Visible = -1;
        } else if (animStep == 9) {
            Timer1.Interval = 8000;
            Image5.Picture = LoadPicture(Trim(paths.imageDir) + "op5.bmp");
            b_Image5Container.Visible = -1;
            b_Container5.Visible = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "op5.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        } else if (animStep == 10) {
            Timer1.Interval = 500;
            Image5.Picture = LoadPicture("");
            b_Image5Container.Visible = 0;
            b_Container5.Visible = -1;
        } else if (animStep == 11) {
            Timer1.Interval = 8000;
            Image6.Picture = LoadPicture(Trim(paths.imageDir) + "op6.bmp");
            b_Image6Container.Visible = -1;
            b_Container6.Visible = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "op6.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        } else if (animStep == 12) {
            Timer1.Interval = 500;
            Image6.Picture = LoadPicture("");
            b_Image6Container.Visible = 0;
            b_Container6.Visible = -1;
        } else if (animStep == 13) {
            Timer1.Interval = 500;
            Image6.Picture = LoadPicture("");
            b_Image6Container.Visible = 0;
            b_Container6.Visible = -1;
        }
    }

    return {
        b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp, b_Gizzy_Click,
        b_Gizzy_MouseDown, b_Gizzy_MouseUp, b_Hoff_Click, b_Hoff_MouseDown,
        b_Hoff_MouseUp, b_Puffer_Click, b_Puffer_MouseDown, b_Puffer_MouseUp,
        b_Roke_Click, b_Roke_MouseDown, b_Roke_MouseUp, b_Trading_Click,
        b_Trading_MouseDown, b_Trading_MouseUp, b_Vander_Click, b_Vander_MouseDown,
        b_Vander_MouseUp, setRivalIntelligence, Form_Activate, Form_KeyPress,
        Form_Load, Timer1_Timer,
    };
});
