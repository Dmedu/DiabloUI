# Tab栏

## 用法

```
import { Tab } from 'react-native-diablo-ui';
const App = () => {
    return (
        <Tab
            renderItem={
                <View style={{
                    flexDirection: 'row', 
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={()=>Linking.openURL('https://github.com/Dmedu') }>
                        <Text style={{ color: 'cyan' }}>Nav GitHub</Text>
                    </TouchableOpacity>
                </View>
            }
            data={[
                {
                    value: 1,
                    label: 'Profile'
                },
                {
                    value: 2,
                    label: 'Latest',
                },
                {
                    value: 3,
                    label: 'Follow',
                }
            ]}
            onChange={(item, index) => {
                console.log(item);
                console.log(index);
            }}
        />
    )
}
export default App;

```

## props

  - [`style`](#style)
  - [`dataItemStyle`](#dataItemStyle)
  - [`activeColor`](#activeColor)
  - [`inactiveColor`](#inactiveColor)
  - [`data`](#data)
  - [`renderItem`](#renderItem)
  - [`onChange`](#onChange)
  - [`scrollable`](#scrollable)
  - [`showActiveLine`](#showActiveLine)
  - [`showLine`](#showLine)
  - [`lineColor`](#lineColor)
  - [`tabHeight`](#tabHeight)

## 参考

### `style`

最外层样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `dataItemStyle`

每个item样式

|  类型  | 默认值 |
| :----: | :-----: |
| object |   none   |

---

### `activeColor`

激活颜色

|  类型  | 默认值 |
| :----: | :-----: |
| string |   rgba(255,255,255,1)   |

---

### `inactiveColor`

未激活颜色

|  类型  | 默认值 |
| :----: | :-----: |
| string |   rgba(191, 191, 191, .8)   |

---

### `data`

数据源

|  类型  | 默认值 |
| :----: | :-----: |
| array |   none   |

---

### `renderItem`

自定义最后一项item

|  类型  | 默认值 |
| :----: | :-----: |
| func node element |   none   |

---

### `onChange`

切换状态时的回调

|  类型  | 默认值 |
| :----: | :-----: |
| func |   none   |

---

### `scrollable`

是否滚动

|  类型  | 默认值 |
| :----: | :-----: |
| bool |   true   |

---

### `showActiveLine`

是否显示激活状态下划线

|  类型  | 默认值 |
| :----: | :-----: |
| bool |   true   |

---

### `showLine`

是否显示视图下划线

|  类型  | 默认值 |
| :----: | :-----: |
| bool |   true   |

---

### `lineColor`

视图下划线颜色

|  类型  | 默认值 |
| :----: | :-----: |
| string |   rgba(191, 191, 191, .8)   |

---

### `tabHeight`

tab高度

|  类型  | 默认值 |
| :----: | :-----: |
| number |   50   |


