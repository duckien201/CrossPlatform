import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';

export default function ChangePasswordScreen() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangePassword = () => {
        // Kiểm tra mật khẩu hiện tại và các điều kiện khác
        if (!currentPassword || !newPassword || !confirmNewPassword) {
            setError('Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setError('Mật khẩu mới và xác nhận mật khẩu không khớp.');
            return;
        }

        // Thực hiện logic thay đổi mật khẩu ở đây, ví dụ: gửi yêu cầu đến máy chủ hoặc cơ sở dữ liệu

        // Sau khi thay đổi mật khẩu thành công, xóa dữ liệu và hiển thị thông báo thành công
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        setError('Mật khẩu đã được thay đổi thành công.');
    };

    return (
        <View style={styles.container}>
            <Header>Đổi mật khẩu</Header>
            <Text style={styles.label}>Mật khẩu hiện tại:</Text>
            <TextInput
                style={styles.input}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                secureTextEntry={true}
            />
            <Text style={styles.label}>Mật khẩu mới:</Text>
            <TextInput
                style={styles.input}
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={true}
            />
            <Text style={styles.label}>Xác nhận mật khẩu mới:</Text>
            <TextInput
                style={styles.input}
                value={confirmNewPassword}
                onChangeText={setConfirmNewPassword}
                secureTextEntry={true}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button mode="contained" onPress={handleChangePassword}>Thay đổi mật khẩu</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});